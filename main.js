import { setLanguage, updateDisplayUnits, displayResults, updateAllCharts } from './ui.js';
import { runCalculation } from './calculator.js';

window.onload = () => {
    // --- STATE MANAGEMENT ---
    let lastInputs = null;
    let lastRawResults = {};
    let lastChartData = {};

    // --- DOM ELEMENTS ---
    const batteryTypeSelector = document.getElementById('batteryType');
    const calculateBtn = document.getElementById('calculateBtn');
    const exportBtn = document.getElementById('exportBtn');
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-content');
    
    // --- PRESETS ---
    const batteryPresets = {
        nmc: { rte: 88, degradationRate: 1.5 },
        lfp: { rte: 93, degradationRate: 1.0 },
        nca: { rte: 90, degradationRate: 1.8 },
        'li-ion': { rte: 90, degradationRate: 1.6 },
        'na-ion': { rte: 85, degradationRate: 1.2 }
    };

    // --- EVENT LISTENERS ---
    batteryTypeSelector.addEventListener('change', (e) => {
        const preset = batteryPresets[e.target.value];
        if (preset) {
            document.getElementById('rte').value = preset.rte;
            document.getElementById('degradationRate').value = preset.degradationRate;
        }
    });

    calculateBtn.addEventListener('click', () => {
        lastInputs = {
            batteryType: batteryTypeSelector.options[batteryTypeSelector.selectedIndex].text,
            powerMW: parseFloat(document.getElementById('systemPower').value),
            capacityMWh: parseFloat(document.getElementById('systemCapacity').value),
            rte: parseFloat(document.getElementById('rte').value),
            dod: parseFloat(document.getElementById('dod').value),
            cyclesPerYear: parseInt(document.getElementById('cyclesPerYear').value),
            degradationRate: parseFloat(document.getElementById('degradationRate').value),
            capexPerKWh: parseFloat(document.getElementById('capex').value),
            omPerKWYear: parseFloat(document.getElementById('omCost').value),
            chargingCostPerMWh: parseFloat(document.getElementById('chargingCost').value),
            replacementCostPercent: parseFloat(document.getElementById('replacementCost').value),
            replacementYear: parseInt(document.getElementById('replacementYear').value),
            lifetime: parseInt(document.getElementById('projectLifetime').value),
            discountRate: parseFloat(document.getElementById('discountRate').value),
            inflationRate: parseFloat(document.getElementById('inflationRate').value),
            ppaPrice: parseFloat(document.getElementById('ppaPrice').value),
            ppaEscalation: parseFloat(document.getElementById('ppaEscalation').value),
        };

        const { rawResults, displayResults: resultsToDisplay, chartData } = runCalculation(lastInputs);
        lastRawResults = rawResults;
        lastChartData = chartData;

        displayResults(resultsToDisplay);
        updateDisplayUnits(lastRawResults, lastInputs);
        
        const currentLang = localStorage.getItem('bess_lang') || 'uk';
        updateAllCharts(currentLang, lastChartData);
    });

    document.getElementById('unitToggle').addEventListener('change', () => updateDisplayUnits(lastRawResults, lastInputs));
    document.getElementById('lang-uk').addEventListener('click', () => { setLanguage('uk', lastChartData); });
    document.getElementById('lang-en').addEventListener('click', () => { setLanguage('en', lastChartData); });

    exportBtn.addEventListener('click', () => {
        if (!lastInputs || !lastRawResults.hasOwnProperty('lcoeNominal')) {
            alert("Будь ласка, спочатку виконайте розрахунок.");
            return;
        }
        
        const useMwh = document.getElementById('unitToggle').checked;
        const unitLabel = useMwh ? '$/МВт·год' : '¢/кВт·год';
        const formatValue = (value) => useMwh ? value.toFixed(2) : (value / 10).toFixed(2);
        
        const inputsData = Object.keys(lastInputs).map(key => ({ "Параметр": key, "Значення": lastInputs[key] }));
        
        const resultsData = [
            { "Метрика": "Чисті капітальні витрати", "Значення": document.getElementById('resNetCapitalCostValue').textContent }, 
            { "Метрика": "ККД повного циклу", "Значення": document.getElementById('resRteValue').textContent },
            { "Метрика": "Зарядка від мережі (Рік 1)", "Значення": document.getElementById('resEnergyChargedY1Value').textContent }, 
            { "Метрика": `LCOE (номінальний), ${unitLabel}`, "Значення": formatValue(lastRawResults.lcoeNominal) },
            { "Метрика": `LCOE (реальний), ${unitLabel}`, "Значення": formatValue(lastRawResults.lcoeReal) }, 
            { "Метрика": `Ціна PPA (Рік 1), ${unitLabel}`, "Значення": formatValue(lastInputs.ppaPrice) },
            { "Метрика": `LPPA (номінальний), ${unitLabel}`, "Значення": formatValue(lastRawResults.lppaNominal) }, 
            { "Метрика": `LPPA (реальний), ${unitLabel}`, "Значення": formatValue(lastRawResults.lppaReal) },
            { "Метрика": "Чиста приведена вартість (NPV)", "Значення": document.getElementById('resNpvValue').textContent }, 
            { "Метрика": "Внутрішня норма дохідності (IRR)", "Значення": document.getElementById('resIrrValue').textContent },
            { "Метрика": "Рік досягнення IRR (окупність)", "Значення": document.getElementById('resPaybackYearValue').textContent },
        ];

        const inputs_ws = XLSX.utils.json_to_sheet(inputsData);
        const results_ws = XLSX.utils.json_to_sheet(resultsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, inputs_ws, "Вхідні дані");
        XLSX.utils.book_append_sheet(wb, results_ws, "Результати");
        XLSX.writeFile(wb, "BESS_Calculation_Results.xlsx");
    });

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('data-target');
            
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.remove('hidden');
                } else {
                    page.classList.add('hidden');
                }
            });
            sideMenu.classList.remove('open');
        });
    });

    // --- INITIALIZATION ---
    const savedLang = localStorage.getItem('bess_lang') || 'uk';
    setLanguage(savedLang, lastChartData);
    const event = new Event('change');
    batteryTypeSelector.dispatchEvent(event);
};

