import { translations } from './translations.js';

let cashflowChart = null, degradationChart = null, cumulativeNpvChart = null;

export function setLanguage(lang, lastChartData) {
    localStorage.setItem('bess_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerText = translations[lang][key];
        }
    });
    
     document.querySelectorAll('[data-lang-key-html]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key-html');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });

    document.getElementById('lang-uk').classList.toggle('active', lang === 'uk');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    if (lastChartData && lastChartData.years) {
        updateAllCharts(lang, lastChartData);
    }
}

export function updateDisplayUnits(lastRawResults, lastInputs) {
    if (!lastRawResults || !lastRawResults.hasOwnProperty('lcoeNominal')) return; 
    
    const useMwh = document.getElementById('unitToggle').checked;
    const unitLabelLcoe = useMwh ? '$/МВт·год' : '¢/кВт·год';
    const unitLabelPpa = useMwh ? '$/МВт·год' : '¢/кВт·год';

    const formatValue = (value) => {
        return useMwh ? value.toFixed(2) : (value / 10).toFixed(2);
    };

    document.getElementById('resLcoeNominalValue').textContent = `${formatValue(lastRawResults.lcoeNominal)} ${unitLabelLcoe}`;
    document.getElementById('resLcoeRealValue').textContent = `${formatValue(lastRawResults.lcoeReal)} ${unitLabelLcoe}`;
    document.getElementById('resPpaY1Value').textContent = `${formatValue(lastInputs.ppaPrice)} ${unitLabelPpa}`;
    document.getElementById('resLppaNominalValue').textContent = `${formatValue(lastRawResults.lppaNominal)} ${unitLabelLcoe}`;
    document.getElementById('resLppaRealValue').textContent = `${formatValue(lastRawResults.lppaReal)} ${unitLabelLcoe}`;
}

export function displayResults(results) {
    const formatInt = (num) => Math.round(num).toLocaleString('uk-UA');
    
    document.getElementById('resNetCapitalCostValue').textContent = `$${formatInt(results.initialCapex)}`;
    document.getElementById('resRteValue').textContent = `${results.rte.toFixed(0)}%`;
    document.getElementById('resEnergyChargedY1Value').textContent = `${formatInt(results.energyChargedY1)} МВт·год`;
    document.getElementById('resNpvValue').textContent = `$${formatInt(results.npv)}`;
    document.getElementById('resIrrValue').textContent = isNaN(results.irr) ? "N/A" : `${(results.irr * 100).toFixed(2)}%`;
    document.getElementById('resPaybackYearValue').textContent = results.paybackYear;

    document.getElementById('results').classList.remove('hidden');
    document.getElementById('exportBtn').classList.remove('hidden');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function updateAllCharts(lang, lastChartData) {
    updateCashflowChart(lang, lastChartData);
    updateDegradationChart(lang, lastChartData);
    updateCumulativeNpvChart(lang, lastChartData);
}

export { updateAllCharts };


function updateCashflowChart(lang, lastChartData) {
    const ctx = document.getElementById('cashflowChart').getContext('2d');
    if (cashflowChart) cashflowChart.destroy();
    cashflowChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: lastChartData.years,
            datasets: [
                { label: translations[lang].chart_revenue, data: lastChartData.annualRevenues, backgroundColor: '#107c10' },
                { label: translations[lang].chart_chargingCost, data: lastChartData.annualChargingCosts, backgroundColor: '#0078d4' },
                { label: translations[lang].chart_omCost, data: lastChartData.annualOmCosts, backgroundColor: '#ffb900' },
                { label: translations[lang].chart_replacementCost, data: lastChartData.annualReplacementCosts, backgroundColor: '#d83b01' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: { mode: 'index' }
            },
            scales: {
                x: { stacked: true, title: { display: true, text: translations[lang].chart_year, font: { family: 'Segoe UI' } } },
                y: { stacked: true, title: { display: true, text: `${translations[lang].chart_value} ($)`, font: { family: 'Segoe UI' } } }
            }
        }
    });
}

function updateDegradationChart(lang, lastChartData) {
    const ctx = document.getElementById('degradationChart').getContext('2d');
    if(degradationChart) degradationChart.destroy();
    degradationChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: lastChartData.years,
            datasets: [{
                label: `${translations[lang].chart_capacity} (МВт·год)`,
                data: lastChartData.annualCapacities,
                borderColor: '#0078d4',
                backgroundColor: 'rgba(0, 120, 212, 0.1)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
             responsive: true,
             scales: {
                x: { title: { display: true, text: translations[lang].chart_year, font: { family: 'Segoe UI' } } },
                y: { title: { display: true, text: `${translations[lang].chart_capacity} (МВт·год)`, font: { family: 'Segoe UI' } } }
            }
        }
    });
}

function updateCumulativeNpvChart(lang, lastChartData) {
    const ctx = document.getElementById('cumulativeNpvChart').getContext('2d');
    if(cumulativeNpvChart) cumulativeNpvChart.destroy();
    cumulativeNpvChart = new Chart(ctx, {
        type: 'line',
         data: {
            labels: [0, ...lastChartData.years],
            datasets: [{
                label: translations[lang].chart_cumulative_npv,
                data: lastChartData.cumulativeDiscountedCashFlows,
                borderColor: '#107c10',
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    const zero = chart.scales.y.getPixelForValue(0);
                    const top = chart.scales.y.getPixelForValue(Math.max(...lastChartData.cumulativeDiscountedCashFlows));
                    const bottom = chart.scales.y.getPixelForValue(Math.min(...lastChartData.cumulativeDiscountedCashFlows));

                    const range = bottom - top;
                    if (range <= 0) return 'rgba(16, 124, 16, 0.1)';

                    const zeroPoint = (bottom - zero) / range;
                    
                    gradient.addColorStop(0, 'rgba(216, 59, 1, 0.3)');
                    if (zeroPoint > 0 && zeroPoint < 1) {
                        gradient.addColorStop(zeroPoint, 'rgba(216, 59, 1, 0.1)');
                        gradient.addColorStop(zeroPoint, 'rgba(16, 124, 16, 0.1)');
                    }
                    gradient.addColorStop(1, 'rgba(16, 124, 16, 0.3)');

                    return gradient;
                },
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                 annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: 0,
                            yMax: 0,
                            borderColor: 'rgb(50, 50, 50)',
                            borderWidth: 1,
                            borderDash: [6, 6]
                        }
                    }
                }
            },
             scales: {
                x: { title: { display: true, text: translations[lang].chart_year, font: { family: 'Segoe UI' } } },
                y: { title: { display: true, text: `${translations[lang].chart_value} ($)`, font: { family: 'Segoe UI' } } }
            }
        }
    });
}

