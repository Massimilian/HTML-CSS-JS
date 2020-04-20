let appData = {
    budget: 0,
    incomeBudget: 0,
    time: new Date(),
    expenses: {},
    optionalExpences: {},
    income: [],
    savings: false,
    bankIncome: 0,

    chooseExpenses: function () {
        while (confirm('Есть ли обязательные статьи расходов?')) {
            let article = prompt('Введите имя статьи расходов', 'name');
            let sum = +prompt('Во сколько обойдется (в месяц)?', 0);
            if (typeof (article) != null && typeof (sum) != null && article != '' && sum != '') {
                this.expenses[article] = sum;
                alert("Статья расходов добавлена.");
            } else {
                alert("В указании статьи расходов допущена ошибка. Попробуйте ещё раз.");
            }
        }
    },

    checkSum: function (text) {
        let sum = +prompt(text, "0");
        while (isNaN(sum) || sum == null || sum == "" || sum < 0) {
            alert("Данные ошибочные. Пожалуйста, введите ещё раз.");
            sum = +prompt(text, "0");
        }
        return sum;
    },

    setDayBudget: function () {
        let thisBudget = this.budget;
        for (let key in this.expenses) {
            thisBudget -= this.expenses[key];
        }
        this.dayBud = ((this.incomeBudget + thisBudget) / 30).toFixed(2);
    },

    showDayBudget: function () {
        alert(`Свободный дневной бюджет = ${this.dayBud}`);
    },

    calcBankSavings: function () {
        this.savings = confirm("Имеются ли у Вас банковские вложения?");
        if (this.savings) {
            let contribution = this.checkSum("Введите сумму вложений.");
            let percent = this.checkSum("Введите размер процента.");
            this.bankIncome = (contribution / 100 / 12 * percent).toFixed(2);
            alert(`Ваш доход в банке составил ${this.bankIncome}.`)
        } else {
            alert("Банковских вложений нет.");
        }
    },

    getBudgetStatus: function () {
        if (this.dayBud < 1000) {
            return "низкий";
        } else if (this.dayBud < 2500) {
            return "средний";
        } else {
            return "высокий";
        }
    },

    chooseIncome: function () {
        let items = prompt("Перечислите дополнительные статьи доходов (через запятую)");
        if (items) {
            this.income = items.split(',');
            for (let value of this.income) {
                this.incomeBudget += this.checkSum(`Введите сумму дохода для статьи "${value.trim()}"`);
            }
        } else {
            this.income.push("отсутствуют")
        }
    },

    showAll: function () {
        let result = `Общий итог по состоянию на ${this.time}: \n`
        result += `Общий доход за месяц: ${this.budget}. \n`;
        result += `Размер дополнительного дохода: ${this.incomeBudget}. \n`;
        result += `Источники дополнительного дохода: ${this.income.join(', ')}. \n`;
        result += `Финансовый уровень ${this.getBudgetStatus()}. \n`;
        result += `Сумма дохода с банковского вложения: ${this.bankIncome}. \n`;
        result += "----------------------------------- \n";
        result += "Всего доброго!";
        alert(result);
    },
};

appData.budget = appData.checkSum("Ваш бюджет на месяц?");
appData.chooseExpenses();
appData.chooseIncome();
appData.setDayBudget();
appData.showDayBudget();
alert(`Ваш финансовый уровень оценён как ${appData.getBudgetStatus()}.`)
appData.calcBankSavings();
appData.showAll();