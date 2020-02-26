'use strict';


let startBtn = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let epxensesItems = document.getElementsByClassName('expenses-item');
let optionalExpnsItems = document.querySelectorAll('.optionalexpenses-item');

let expnsBtn = document.getElementsByTagName('button')[0],
    optnlExpBtn = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2];

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumVal = document.querySelector('#sum'),
    percentVal = document.querySelector('#percent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value');


let money, time;
expnsBtn.style.visibility = 'hidden';
optnlExpBtn.style.visibility = 'hidden';
calculateBtn.style.visibility = 'hidden';
sumVal.disabled = true;
percentVal.disabled = true;
let monthExpenses = 0;

startBtn.addEventListener('click', () => {
    expnsBtn.style.visibility = 'visible';
    optnlExpBtn.style.visibility = 'visible';
    calculateBtn.style.visibility = 'visible';
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    let date = new Date(time);
    yearVal.value = date.getFullYear();
    monthVal.value = date.getMonth() + 1;
    dayVal.value = date.getDate();

});

expnsBtn.addEventListener('click', () => {
    let sum  = 0;
    for (let i = 0; i < epxensesItems.length; i++) {
        let a = epxensesItems[i].value,
            b = epxensesItems[++i].value;

        if ((typeof (a)) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("Всё верно");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
            console.log('Ошибка ввода');
        }
        expensesValue.textContent = sum;
        monthExpenses = sum;
    }
});


optnlExpBtn.addEventListener('click', () => {
    let border = optionalExpnsItems.length;

    for (let i = 0; i < border; i++) {
        let opt = optionalExpnsItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += opt + ' ';
    }


    console.log(appData.optionalExpenses);

});

calculateBtn.addEventListener('click', () => {
    
    appData.moneyPerDay = ((appData.budget - monthExpenses)/ 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.budget != undefined) {
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка.";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }

});

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', () => {
    if (appData.savings) {
        sumVal.disabled = true;
        percentVal.disabled = true;
        appData.savings = false;
    } else {
        sumVal.disabled = false;
        percentVal.disabled = false;
        appData.savings = true;
    }
});

sumVal.addEventListener('input', () => {
    calculateIncome();
});

percentVal.addEventListener('input', () => {
    calculateIncome();
});

function calculateIncome() {
    if (appData.savings) {
        let sum = sumVal.value,
            percent = percentVal.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
}

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }