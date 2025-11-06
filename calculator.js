function calculateIRR(cashflows, guess = 0.1) {
    const maxIterations = 100, precision = 1e-7;
    let rate = guess;
    for (let i = 0; i < maxIterations; i++) {
        let npv = 0, derivative = 0;
        for (let t = 0; t < cashflows.length; t++) {
            npv += cashflows[t] / Math.pow(1 + rate, t);
            derivative -= t * cashflows[t] / Math.pow(1 + rate, t + 1);
        }
        if (Math.abs(derivative) < 1e-10) return NaN; // Avoid division by zero
        const newRate = rate - npv / derivative;
        if (Math.abs(newRate - rate) < precision) return newRate;
        rate = newRate;
    }
    return NaN; // Failed to converge
}

export function runCalculation(inputs) {
    const inputsForCalc = { ...inputs };
    inputsForCalc.rte /= 100;
    inputsForCalc.dod /= 100;
    inputsForCalc.degradationRate /= 100;
    inputsForCalc.replacementCostPercent /= 100;
    inputsForCalc.discountRate /= 100;
    inputsForCalc.inflationRate /= 100;
    inputsForCalc.ppaEscalation /= 100;

    const powerKW = inputsForCalc.powerMW * 1000;
    const capacityKWh = inputsForCalc.capacityMWh * 1000;
    const initialCapex = capacityKWh * inputsForCalc.capexPerKWh;
    const realDiscountRate = ((1 + inputsForCalc.discountRate) / (1 + inputsForCalc.inflationRate)) - 1;

    let totalDiscountedEnergyNominal = 0, totalDiscountedEnergyReal = 0;
    let totalDiscountedCostNominal = initialCapex, totalDiscountedRevenueNominal = 0;
    let currentCapacityMWh = inputsForCalc.capacityMWh;
    let energyChargedY1 = 0, cashFlows = [-initialCapex], paybackYear = "N/A";

    const chartData = {
        years: Array.from({length: inputs.lifetime}, (_, i) => i + 1),
        annualRevenues: [], annualChargingCosts: [], annualOmCosts: [],
        annualReplacementCosts: [], cumulativeDiscountedCashFlows: [-initialCapex],
        annualCapacities: []
    };

    for (let year = 1; year <= inputsForCalc.lifetime; year++) {
        if (year === inputsForCalc.replacementYear + 1) currentCapacityMWh = inputsForCalc.capacityMWh;
        chartData.annualCapacities.push(currentCapacityMWh);

        const energyDischargedMWh = currentCapacityMWh * inputsForCalc.dod * inputsForCalc.cyclesPerYear;
        const energyChargedMWh = energyDischargedMWh / inputsForCalc.rte;
        if (year === 1) energyChargedY1 = energyChargedMWh;
        
        const costOfCharging = energyChargedMWh * inputsForCalc.chargingCostPerMWh;
        const costOM = powerKW * inputsForCalc.omPerKWYear;
        const costReplacement = (year === inputsForCalc.replacementYear) ? (initialCapex * inputsForCalc.replacementCostPercent) : 0;
        const totalAnnualCost = costOfCharging + costOM + costReplacement;
        
        const currentPpaPrice = inputsForCalc.ppaPrice * Math.pow(1 + inputsForCalc.ppaEscalation, year - 1);
        const annualRevenue = energyDischargedMWh * currentPpaPrice;
        const annualNetCashFlow = annualRevenue - totalAnnualCost;
        cashFlows.push(annualNetCashFlow);

        const prevCumulative = chartData.cumulativeDiscountedCashFlows[chartData.cumulativeDiscountedCashFlows.length - 1];
        const currentCumulative = prevCumulative + annualNetCashFlow / Math.pow(1 + inputsForCalc.discountRate, year);
        chartData.cumulativeDiscountedCashFlows.push(currentCumulative);

        if (currentCumulative > 0 && paybackYear === "N/A") paybackYear = year;
        
        const discountFactorNominal = Math.pow(1 + inputsForCalc.discountRate, year);
        const discountFactorReal = Math.pow(1 + realDiscountRate, year);
        totalDiscountedCostNominal += totalAnnualCost / discountFactorNominal;
        totalDiscountedRevenueNominal += annualRevenue / discountFactorNominal;
        totalDiscountedEnergyNominal += energyDischargedMWh / discountFactorNominal;
        totalDiscountedEnergyReal += energyDischargedMWh / discountFactorReal;
        
        chartData.annualRevenues.push(annualRevenue);
        chartData.annualChargingCosts.push(-costOfCharging);
        chartData.annualOmCosts.push(-costOM);
        chartData.annualReplacementCosts.push(-costReplacement);

        currentCapacityMWh *= (1 - inputsForCalc.degradationRate);
    }

    const lcoeNominal = totalDiscountedEnergyNominal > 0 ? totalDiscountedCostNominal / totalDiscountedEnergyNominal : 0;
    const lcoeReal = totalDiscountedEnergyReal > 0 ? totalDiscountedCostNominal / totalDiscountedEnergyReal : 0;
    const lppaNominal = totalDiscountedEnergyNominal > 0 ? totalDiscountedRevenueNominal / totalDiscountedEnergyNominal : 0;
    const lppaReal = totalDiscountedEnergyReal > 0 ? totalDiscountedRevenueNominal / totalDiscountedEnergyReal : 0;
    const npv = totalDiscountedRevenueNominal - totalDiscountedCostNominal;
    const irr = calculateIRR(cashFlows);

    return {
        rawResults: { lcoeNominal, lcoeReal, lppaNominal, lppaReal },
        displayResults: {
            initialCapex,
            rte: inputs.rte,
            energyChargedY1,
            npv,
            irr,
            paybackYear
        },
        chartData
    };
}

