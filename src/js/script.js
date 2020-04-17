'use strict'

let budget = prompt("Ваш бюджет на месяц?", "0");
let date = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
     bud: budget,
     time: new Date(date),
     expenses: {},
     optionalExpences: {},
     income: [],
     savings: false,
};

appData.expenses.article = prompt('Введите обязательную статью расходов в этом месяце', 'name');
appData.expenses.sum = prompt('Во сколько обойдется?', 0);

let result = `Состояние бюджета на ${appData.time} - ${appData.bud}; обязательные траты на статью расходов ${appData.expenses.article} составляют ${appData.expenses.sum}; итоговый бюджет - ${appData.bud - appData.expenses.sum}.`;
alert(result);


