let budget = +prompt("Ваш бюджет на месяц?", "0");
let i = 3;
function checkSum(text) {
    let sum = +prompt(text, "0");
    while (isNaN(sum) || sum == null || sum == "" || sum < 0) {
        alert("Данные ошибочные. Пожалуйста, введите ещё раз.");
        sum = +prompt(text, "0");
    }
    return sum;
}

budget = checkSum("Ваш бюджет на месяц?");

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

appData.dayBud = (thisBudget / 30).toFixed(2);
alert(`Свободный дневной бюджет = ${appData.dayBud}`);

appData.savings = confirm("Имеются ли у Вас банковские вложения?");
if (appData.savings) {
    let income = checkSum("Введите сумму вложений.");
    let percent = checkSum("Введите размер процента.");
    let result = income/100/12*percent;
    alert(`Ваш доход в банке составил ${result}.`)
}