let budget = +prompt("Ваш бюджет на месяц?", "0");

let appData = {
    bud: budget,
    time: new Date(),
    expenses: {},
    optionalExpences: {},
    income: [],
    savings: false,
};

while (confirm('Есть ли обязательные статьи расходов?')) {
    let article = prompt('Введите имя статьи расходов', 'name');
    let sum = +prompt('Во сколько обойдется (в месяц)?', 0);
    if (typeof (article) != null && typeof (sum) != null && article != '' && sum != '') {
        appData.expenses[article] = sum;
        alert("Статья расходов добавлена.");
    } else {
        alert("В указании статьи расходов допущена ошибка. Попробуйте ещё раз.");
    }
}

let thisBudget = appData.bud;
for (let key in appData.expenses) {
    thisBudget -= appData.expenses[key];
}

appData.dayBud = Math.round(thisBudget / 30);
alert("Свободный дневной бюджет = " + appData.dayBud);