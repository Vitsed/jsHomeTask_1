'use strict';

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {budget : money, 
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let mustPay = prompt("Введите обязательную статью расходов в этом месяце");
let cost = prompt("Во сколько обойдётся?");
appData.expenses = {mustPay : cost};

console.log(typeof(appData.expenses.mustPay));
console.log(appData.expenses.cost);

alert((money - appData.expenses.mustPay) / 30);
