'use strict';

// let startBtn = document.getElementById('start');

// let _valueBlock = document.getElementsByClassName("result-table")[0];
// let valueBlocks =[];
// let count = 0;

// let budgetValue = document.getElementsByClassName("budget-value")[0];

// // получаю блоки -value
// for (let i = 0; i < _valueBlock.children.length; i++) {
//     // let count = 0;
//     if(_valueBlock.children[i].className.match("-value")) {
//         valueBlocks[count++] = _valueBlock.children[i];
//     }
// }

// //input
// let inputs = document.getElementsByClassName('expenses-item');

// console.log(inputs);

// for (let value of valueBlocks) {
//     console.log(value);
// }

// console.log(budgetValue);

// SIMPLE SOLUTION
/*
2) Задание по проекту

1/       Получить кнопку "Начать расчет" через id

2/       Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

3/        Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

4/        Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

5/        Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

6/        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

*/
//1
let startBtn = document.getElementById('start');
//2
let budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
//3
let exp1 = document.getElementsByClassName('expenses-item')[0], 
    exp2 = document.getElementsByClassName('expenses-item')[1], 
    exp3 = document.getElementsByClassName('expenses-item')[2], 
    exp4 = document.getElementsByClassName('expenses-item')[3]; 

//4 пропустил одну кнопку с индексом 1 )
let confirm = document.getElementsByTagName('button')[0],
    confirm2 = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2];
    
//5
let optionalExp1 = document.querySelectorAll('.optionalexpenses-item')[0],
    optionalExp2 = document.querySelectorAll('.optionalexpenses-item')[1],
    optionalExp3 = document.querySelectorAll('.optionalexpenses-item')[2];

//6
let chooseIncome = document.querySelector('.choose-income'), 
    checkSavings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'), 
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'), 
    month = document.querySelector('.month-value'), 
    day = document.querySelector('.day-value');
