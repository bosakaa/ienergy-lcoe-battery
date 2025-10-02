export const translations = {
    uk: {
        appTitle: "Калькулятор усередненої вартості електроенергії (LCOE) для установок зберігання енергії (BESS)",
        appHeader: "Калькулятор усередненої вартості електроенергії (LCOE) для установок зберігання енергії (BESS)",
        instituteName: "Інститут загальної енергетики НАН України",
        menu: "Меню",
        calculator: "Калькулятор",
        formulas: "Формули",
        contacts: "Контакти",
        techParams: "Технічні параметри",
        costParams: "Параметри витрат",
        finParams: "Фінансові параметри",
        batteryType: "Тип батареї",
        option_nmc: "NMC (Збалансований)",
        option_lfp: "LFP (Довговічний)",
        option_nca: "NCA (Високоенергетичний)",
        option_liion: "Li-ion (Високий ресурс)",
        option_naion: "Na-ion (Перспективний)",
        systemPower: "Потужність системи",
        systemCapacity: "Ємність системи",
        rte: "ККД повного циклу (RTE)",
        dod: "Глибина розряду (DoD)",
        cyclesPerYear: "Кількість циклів на рік",
        unit_cycles: "циклів",
        degradationRate: "Річна деградація ємності",
        capex: "Капітальні витрати (CAPEX)",
        omCost: "Фіксовані витрати на O&M",
        chargingCost: "Вартість енергії для зарядки",
        replacementCost: "Вартість заміни",
        unit_ofCapex: "% від CAPEX",
        replacementYear: "Рік заміни",
        unit_year: "Рік",
        ppaPrice: "Ціна продажу (PPA), Рік 1",
        ppaEscalation: "Індексація PPA",
        unit_perYear: "% / рік",
        projectLifetime: "Термін служби проєкту",
        unit_years: "Років",
        discountRate: "Ставка дисконтування",
        inflationRate: "Рівень інфляції",
        exportBtn: "Експортувати в Excel",
        calculateBtn: "Розрахувати",
        resultsTitle: "Результати моделювання",
        resNetCapitalCost: "Чисті капітальні витрати",
        resRte: "ККД повного циклу",
        resEnergyChargedY1: "Зарядка від мережі (Рік 1)",
        resLcoeNominal: "LCOE (номінальний)",
        resLcoeReal: "LCOE (реальний)",
        resPpaY1: "Ціна PPA (Рік 1)",
        resLppaNominal: "LPPA (номінальний)",
        resLppaReal: "LPPA (реальний)",
        resNpv: "Чиста приведена вартість (NPV)",
        resIrr: "Внутрішня норма дохідності (IRR)",
        resPaybackYear: "Рік досягнення IRR (окупність)",
        chart_cashflow: "Річні грошові потоки",
        chart_degradation: "Деградація ємності",
        chart_cumulativeNpv: "Кумулятивний дисконтований грошовий потік (NPV)",
        formulasTitle: "Використані формули та метрики",
        contactsTitle: "Контакти",
        chart_revenue: "Доходи",
        chart_chargingCost: "Вартість зарядки",
        chart_omCost: "O&M",
        chart_replacementCost: "Заміна",
        chart_capacity: "Ємність",
        chart_year: "Рік",
        chart_value: "Значення",
        chart_cumulative_npv: "Кумулятивний NPV",
        tooltip_batteryType: "Оберіть хімію акумулятора. Це автоматично оновить типові значення ККД та деградації.",
        tooltip_systemPower: "Максимальна потужність, з якою система може заряджатися/розряджатися.<br><br>Типовий діапазон: 50 - 100 МВт.",
        tooltip_systemCapacity: "Загальна кількість енергії, яку може зберігати батарея.<br><br>Типовий діапазон: 200 - 400 МВт·год (для 4-годинних систем).",
        tooltip_rte: "Відсоток енергії, що повертається під час розрядки, відносно енергії, витраченої на зарядку.<br><br>Типовий діапазон: 88% - 91%.",
        tooltip_dod: "Відсоток від повної ємності, що використовується в кожному циклі.<br><br>Типове значення: 90%.",
        tooltip_cyclesPerYear: "Очікувана кількість повних циклів заряду-розряду протягом року.<br><br>Типове значення: 350.",
        tooltip_degradationRate: "Відсоток втрати максимальної ємності батареї щороку через зношення.<br><br>Типове значення: ~2.6%.",
        tooltip_capex: "Початкові інвестиційні витрати на обладнання, монтаж та введення в експлуатацію.<br><br>Типовий діапазон (storage): $249 - $421/кВт·год.",
        tooltip_omCost: "Щорічні витрати на обслуговування, моніторинг та страхування.<br><br>Типовий діапазон (PV): $11 - $14/кВт-рік.",
        tooltip_chargingCost: "Середня ціна, за якою система купує електроенергію з мережі для зарядки.<br><br>Типове значення (standalone): ~$51/МВт·год.",
        tooltip_replacementCost: "Вартість заміни акумуляторного блоку у відсотках від початкових капітальних витрат.",
        tooltip_replacementYear: "Рік, у якому планується провести повну заміну акумуляторних модулів. Модель Lazard використовує \"аугментацію\" замість повної заміни.",
        tooltip_ppaPrice: "Ціна, за якою система продає 1 МВт·год енергії в перший рік роботи.",
        tooltip_ppaEscalation: "Щорічне зростання ціни продажу енергії (PPA) для врахування інфляції або ринкових умов.",
        tooltip_projectLifetime: "Загальний період, протягом якого проєкт буде експлуатуватися та аналізуватися.<br><br>Типове значення: 20 років.",
        tooltip_discountRate: "Норма дохідності для приведення майбутніх грошових потоків до їхньої сьогоднішньої вартості.<br><br>Типовий діапазон (WACC): 4.2% - 10.0%.",
        tooltip_inflationRate: "Середньорічний темп знецінення грошей, що використовується для розрахунку реальних показників.<br><br>Типове значення: ~2.0%.",
        tooltip_resNetCapitalCost: "Загальна початкова вартість проєкту без урахування фінансування.",
        tooltip_resRte: "Ефективність системи 'туди-назад', враховуючи втрати при заряді та розряді.",
        tooltip_resEnergyChargedY1: "Загальна кількість енергії, яку система споживе з мережі для зарядки протягом першого року.",
        tooltip_resLcoeNominal: "Нормована вартість енергії в номінальних доларах (без поправки на інфляцію).",
        tooltip_resLcoeReal: "Нормована вартість енергії в реальних доларах (з поправкою на інфляцію).",
        tooltip_resPpaY1: "Початкова ціна продажу електроенергії.",
        tooltip_resLppaNominal: "Нормована (усереднена за весь термін) ціна продажу енергії в номінальних доларах.",
        tooltip_resLppaReal: "Нормована (усереднена за весь термін) ціна продажу енергії в реальних доларах.",
        tooltip_resNpv: "Різниця між дисконтованими доходами та витратами. Позитивне значення вказує на прибутковість.",
        tooltip_resIrr: "Ставка дисконтування, за якої NPV проєкту дорівнює нулю. Показує очікувану дохідність інвестицій.",
        tooltip_resPaybackYear: "Рік, у якому дисконтовані доходи проєкту перевищують його дисконтовані витрати.",
        formulasContent: `<div class="formula-item">
            <p class="formula-title">Чисті капітальні витрати (Net Capital Cost)</p>
            <p class="formula-explanation">Загальні початкові інвестиції в проєкт. Розраховуються як добуток питомих капітальних витрат на загальну ємність системи.</p>
            <code class="formula-math">CAPEX = Ємність_системи (кВт·год) * Питомі_витрати ($/кВт·год)</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Енергія для зарядки (Рік 1)</p>
            <p class="formula-explanation">Загальна кількість енергії, яку потрібно закупити з мережі для зарядки системи протягом першого року, з урахуванням втрат (ККД).</p>
            <code class="formula-math">Енергія_зарядки = (Енергія_розрядки_рік_1) / ККД</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Чиста приведена вартість (NPV)</p>
            <p class="formula-explanation">NPV — це різниця між сьогоднішньою вартістю майбутніх доходів та сьогоднішньою вартістю витрат. Це ключовий показник прибутковості інвестицій. Проєкт вважається фінансово доцільним, якщо NPV > 0.</p>
            <code class="formula-math">NPV = Σ [ (Доходи_t - Витрати_t) / (1 + r)^t ] - CAPEX</code>
            <p class="formula-explanation mt-2">де 't' - рік, 'r' - ставка дисконтування.</p>
        </div>
        <div class="formula-item">
            <p class="formula-title">Внутрішня норма дохідності (IRR)</p>
            <p class="formula-explanation">IRR — це ставка дисконтування, за якої NPV проєкту дорівнює нулю. Вона показує очікувану річну дохідність інвестицій. Проєкт привабливий, якщо IRR вища за вартість капіталу (ставку дисконтування).</p>
            <code class="formula-math">0 = Σ [ (Доходи_t - Витрати_t) / (1 + IRR)^t ] - CAPEX</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Нормована вартість енергії (LCOE)</p>
            <p class="formula-explanation">LCOE представляє середню собівартість однієї одиниці енергії (кВт·год або МВт·год) за весь життєвий цикл. Це точка беззбитковості для продажу енергії.</p>
            <code class="formula-math">LCOE = (Сума дисконтованих витрат) / (Сума дисконтованої енергії)</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Нормована ціна договору (LPPA)</p>
            <p class="formula-explanation">LPPA — це середня ціна продажу однієї одиниці енергії за весь життєвий цикл, приведена до сьогоднішньої вартості.</p>
            <code class="formula-math">LPPA = (Сума дисконтованих доходів) / (Сума дисконтованої енергії)</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Реальна та номінальна ставка</p>
            <p class="formula-explanation">Номінальні показники не враховують інфляцію, тоді як реальні її враховують. Реальна ставка дисконтування використовується для розрахунку реальних LCOE та LPPA.</p>
            <code class="formula-math">РеальнаСтавка = ((1 + НомінальнаСтавка) / (1 + Інфляція)) - 1</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Дисконтований період окупності</p>
            <p class="formula-explanation">Рік, у якому кумулятивна (накопичена) дисконтована вартість чистих грошових потоків (доходи мінус витрати) вперше стає додатною.</p>
        </div>`,
    contactsContent: `<p class="mb-2"><strong>Інститут загальної енергетики НАН України</strong></p>
        <p>Адреса: вул. Антоновича, 172, Київ, 03150, Україна</p>
        <p>Телефон: (096) 852-04-95</p>
        <p>Email: bosak_av@nas.gov.ua</p>`
    },
    en: {
        appTitle: "Levelized Cost of Energy (LCOE) Calculator for Battery Energy Storage Systems (BESS)",
        appHeader: "Levelized Cost of Energy (LCOE) Calculator for BESS",
        instituteName: "Institute of General Energy of NAS of Ukraine",
        menu: "Menu",
        calculator: "Calculator",
        formulas: "Formulas",
        contacts: "Contacts",
        techParams: "Technical Parameters",
        costParams: "Cost Parameters",
        finParams: "Financial Parameters",
        batteryType: "Battery Type",
        option_nmc: "NMC (Balanced)",
        option_lfp: "LFP (Long Life)",
        option_nca: "NCA (High Energy)",
        option_liion: "Li-ion (High Cycle)",
        option_naion: "Na-ion (Emerging)",
        systemPower: "System Power",
        systemCapacity: "System Capacity",
        rte: "Round Trip Efficiency (RTE)",
        dod: "Depth of Discharge (DoD)",
        cyclesPerYear: "Cycles Per Year",
        unit_cycles: "cycles",
        degradationRate: "Annual Capacity Degradation",
        capex: "Capital Expenditures (CAPEX)",
        omCost: "Fixed O&M Costs",
        chargingCost: "Charging Energy Cost",
        replacementCost: "Replacement Cost",
        unit_ofCapex: "% of CAPEX",
        replacementYear: "Replacement Year",
        unit_year: "Year",
        ppaPrice: "PPA Price, Year 1",
        ppaEscalation: "PPA Escalation",
        unit_perYear: "% / year",
        projectLifetime: "Project Lifetime",
        unit_years: "Years",
        discountRate: "Discount Rate",
        inflationRate: "Inflation Rate",
        exportBtn: "Export to Excel",
        calculateBtn: "Calculate",
        resultsTitle: "Simulation Results",
        resNetCapitalCost: "Net Capital Cost",
        resRte: "Round Trip Efficiency",
        resEnergyChargedY1: "Grid Charging (Year 1)",
        resLcoeNominal: "LCOE (Nominal)",
        resLcoeReal: "LCOE (Real)",
        resPpaY1: "PPA Price (Year 1)",
        resLppaNominal: "LPPA (Nominal)",
        resLppaReal: "LPPA (Real)",
        resNpv: "Net Present Value (NPV)",
        resIrr: "Internal Rate of Return (IRR)",
        resPaybackYear: "IRR Achieved (Payback Year)",
        chart_cashflow: "Annual Cash Flows",
        chart_degradation: "Capacity Degradation",
        chart_cumulativeNpv: "Cumulative Discounted Cash Flow (NPV)",
        formulasTitle: "Formulas and Metrics Used",
        contactsTitle: "Contacts",
        chart_revenue: "Revenue",
        chart_chargingCost: "Charging Cost",
        chart_omCost: "O&M",
        chart_replacementCost: "Replacement",
        chart_capacity: "Capacity",
        chart_year: "Year",
        chart_value: "Value",
        chart_cumulative_npv: "Cumulative NPV",
        tooltip_batteryType: "Select the battery chemistry. This will automatically update typical RTE and degradation values.",
        tooltip_systemPower: "The maximum power (rate) at which the system can charge or discharge.<br><br>Typical range: 50 - 100 MW.",
        tooltip_systemCapacity: "The total amount of energy the battery can store.<br><br>Typical range: 200 - 400 MWh (for 4-hour systems).",
        tooltip_rte: "The percentage of energy returned during discharge relative to the energy spent on charging. Accounts for losses.<br><br>Typical range: 88% - 91%.",
        tooltip_dod: "The percentage of full capacity used in each cycle. A lower DoD extends battery life.<br><br>Typical value: 90%.",
        tooltip_cyclesPerYear: "The expected number of full charge-discharge cycles per year.<br><br>Typical value: 350.",
        tooltip_degradationRate: "The percentage loss of maximum battery capacity each year due to wear.<br><br>Typical value: ~2.6%.",
        tooltip_capex: "Initial investment costs for equipment, installation, and commissioning.<br><br>Typical range (storage): $249 - $421/kWh.",
        tooltip_omCost: "Annual costs for maintenance, monitoring, and insurance.<br><br>Typical range (PV): $11 - $14/kW-year.",
        tooltip_chargingCost: "The average price at which the system buys electricity from the grid to charge.<br><br>Typical value (standalone): ~$51/MWh.",
        tooltip_replacementCost: "The cost of replacing the battery stack as a percentage of the initial capital expenditure.",
        tooltip_replacementYear: "The year in which a full replacement of the battery modules is planned. The Lazard model uses 'augmentation' instead of full replacement.",
        tooltip_ppaPrice: "The price at which the system sells 1 MWh of energy in the first year of operation.",
        tooltip_ppaEscalation: "The annual increase in the PPA price to account for inflation or market conditions.",
        tooltip_projectLifetime: "The total period over which the project will be operated and analyzed.<br><br>Typical value: 20 years.",
        tooltip_discountRate: "The rate of return used to discount future cash flows to their present value. Reflects the cost of capital and risks.<br><br>Typical range (WACC): 4.2% - 10.0%.",
        tooltip_inflationRate: "The average annual rate of currency depreciation, used to calculate real (inflation-adjusted) metrics.<br><br>Typical value: ~2.0%.",
        tooltip_resNetCapitalCost: "The total initial cost of the project, excluding financing.",
        tooltip_resRte: "The round-trip efficiency of the system, including losses during charging and discharging.",
        tooltip_resEnergyChargedY1: "The total amount of energy the system will consume from the grid for charging during the first year.",
        tooltip_resLcoeNominal: "The levelized cost of energy in nominal dollars (not adjusted for inflation).",
        tooltip_resLcoeReal: "The levelized cost of energy in real dollars (adjusted for inflation).",
        tooltip_resPpaY1: "The initial selling price of electricity.",
        tooltip_resLppaNominal: "The levelized (lifetime average) selling price of energy in nominal dollars.",
        tooltip_resLppaReal: "The levelized (lifetime average) selling price of energy in real dollars.",
        tooltip_resNpv: "The difference between discounted revenues and costs. A positive value indicates profitability.",
        tooltip_resIrr: "The discount rate at which the project's NPV equals zero. Shows the expected return on investment.",
        tooltip_resPaybackYear: "The year in which the project's discounted revenues exceed its discounted costs.",
        formulasContent: `<div class="formula-item">
            <p class="formula-title">Net Capital Cost</p>
            <p class="formula-explanation">The total initial investment in the project. Calculated as the product of the specific capital cost and the total system capacity.</p>
            <code class="formula-math">CAPEX = System_Capacity (kWh) * Specific_Cost ($/kWh)</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Charging Energy (Year 1)</p>
            <p class="formula-explanation">The total amount of energy that needs to be purchased from the grid to charge the system during the first year, accounting for losses (RTE).</p>
            <code class="formula-math">Charging_Energy = (Discharged_Energy_Year_1) / RTE</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Net Present Value (NPV)</p>
            <p class="formula-explanation">NPV is the difference between the present value of future revenues and the present value of costs. It's a key indicator of investment profitability. A project is considered financially viable if NPV > 0.</p>
            <code class="formula-math">NPV = Σ [ (Revenues_t - Costs_t) / (1 + r)^t ] - CAPEX</code>
            <p class="formula-explanation mt-2">where 't' is the year, and 'r' is the discount rate.</p>
        </div>
        <div class="formula-item">
            <p class="formula-title">Internal Rate of Return (IRR)</p>
            <p class="formula-explanation">IRR is the discount rate at which the project's NPV equals zero. It shows the expected annual return on investment. A project is attractive if its IRR is higher than the cost of capital (discount rate).</p>
            <code class="formula-math">0 = Σ [ (Revenues_t - Costs_t) / (1 + IRR)^t ] - CAPEX</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Levelized Cost of Energy (LCOE)</p>
            <p class="formula-explanation">LCOE represents the average cost of one unit of energy (kWh or MWh) over the entire lifecycle. It is the break-even point for selling energy.</p>
            <code class="formula-math">LCOE = (Sum of Discounted Costs) / (Sum of Discounted Energy)</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Levelized PPA Price (LPPA)</p>
            <p class="formula-explanation">LPPA is the average selling price of one unit of energy over the entire lifecycle, discounted to its present value.</p>
            <code class="formula-math">LPPA = (Sum of Discounted Revenues) / (Sum of Discounted Energy)</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Real vs. Nominal Rate</p>
            <p class="formula-explanation">Nominal metrics do not account for inflation, while real metrics do. The real discount rate is used to calculate real LCOE and LPPA.</p>
            <code class="formula-math">RealRate = ((1 + NominalRate) / (1 + Inflation)) - 1</code>
        </div>
        <div class="formula-item">
            <p class="formula-title">Discounted Payback Period</p>
            <p class="formula-explanation">The year in which the cumulative discounted value of net cash flows (revenues minus costs) first becomes positive.</p>
        </div>`,
        contactsContent: `<p class="mb-2"><strong>Institute of General Energy of NAS of Ukraine</strong></p>
            <p>Address: 172 Antonovycha St, Kyiv, 03150, Ukraine</p>
            <p>Phone: (096) 852-04-95</p>
            <p>Email: bosak_av@nas.gov.ua</p>`
    }
};

