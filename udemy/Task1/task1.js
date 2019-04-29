'use string'

var money = prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

var appData = {
    budget: money,
    timeData: time,
    exspenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    question2 = prompt("Во сколько обойдется?", ''),
    question3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    question4 = prompt("Во сколько обойдется?", '');



alert(appData.budget / 30); 



