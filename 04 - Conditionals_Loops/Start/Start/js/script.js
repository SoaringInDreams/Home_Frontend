console.clear();

// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11

// * Your code Start *
var num = 11111111111;

if (num.length < 9){
    console.info('To short')
}else if (num.length >11){
    console.info('To long')
}else console.info(num);

// * Your code End *


// ## 1 Клонирование обьектов
//
// Склонируйте обьект objectA в objectB при помощи цикла

var objectA = {
  name: 'John',
  lastname: 'Dou',
  age: 50
};

var objectB = {};


// * Your code Start *
for (var key in objectA ){
    objectB[key] = objectA[key];
}
console.info(objectB);
// * Your code End *

// Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// Если обьект objectB склонирован, значения в нем меняться не будут
// Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50


// ## 2 Ветвление
// При помощи конструкци switch/case выведете текущую дату
// Название месяца должно иметь вид строки
// Например = 14 Июня 2017

var date = new Date();
var day = date.getDate(); // Текущий день
var month = date.getMonth(); // Текущий месяц (от 0 до 11)
var year = date.getFullYear(); // Текущий год
var monthName = ''; // Переменная для значения

// * Your code Start *
switch(month){
    case 0:
        monthName ="Января";
        break;
    case 1:
        monthName ="Февраля";
        break;
    case 2:
        monthName ="Марта";
        break;
    case 3:
        monthName ="Апреля";
        break;
    case 4:
        monthName ="Мая";
        break;
    case 5:
        monthName ="Июня";
        break;
    case 6:
        monthName ="Июля";
        break;
    case 7:
        monthName ="Августа";
        break;
    case 8:
        monthName ="Сентября";
        break;
    case 9:
        monthName ="Октября";
        break;
    case 10:
        monthName ="Ноября";
        break;
    case 11:
        monthName ="Декабря";
        break;
}

// * Your code End *

console.log(`Today is: ${day} ${monthName} ${year}`); // Пример: 14 Июня 2017



// ## 3 Взаимодействие с пользователем
//
// Запросите через prompt у пользователя его имя;
// Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл

var users = [{
  name: 'Alex',
  password: 123
}, {
  name: 'Chris',
  password: 456
}, {
  name: 'Bill',
  password: 789
}];


// * Your code Start *

//outer: while (true){
//    for (var i in users) {
//        if (users[i].name === name) {
//            var password = prompt("Enter your password", "");
//            if (password === String(users[i].password)) {
//                alert("Succeeded");
//                break outer;
//            } else {
//                alert("Wrong password!!!");
//            }
//        }
//    }
//    var name = prompt("Enter your name", "");
//}

// * Your code End *


// ## 4
// Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// После прерывания цикла выводится сумма введеных чисел

//var sumArray = prompt('Please enter number', 0);

// * Your code Start *

// var1:

//var sum = 0;
//var outer = false;
//while(!outer) {
//    var sumArray = prompt('Please enter number', "");
//    if (sumArray.replace(/\d/g, '').length == 0) {
//        sum += parseInt(sumArray);
//    } else {
//        alert(sum);
//        outer = true;
//    }
//}

// var 2:

var sum = 0;
outer:while(true){
    var sumArray = parseInt(prompt('Please enter number', 0));
    if (typeof sumArray === 'number' && !isNaN(sumArray)){
        sum += sumArray;
    }else{
        alert(sum);
        break outer;
    }
}


// * Your code End *

// ## 5
// Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt


// * Your code Start *

//var 1:
var summetNumber = prompt('Please enter number', 0);
if (typeof parseInt(summetNumber) === 'number'){
    alert((summetNumber *(parseInt(summetNumber)+1))/2);
}else{alert ('Not a number!')}

// var 2:

var summetNumber = prompt('Please enter number', 0);
var sum2 = 0;
var i = 0;
for ( i;i<=summetNumber;i++){
    sum2 +=i;
}
alert(sum2);


// * Your code End *


// ## 6
// Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// Размер шахматной доски стандартны 8х8
// Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// Ее можно не трогать
// Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js

var drawFraction = function(){
    const board = document.querySelector('.board');
    for (i=1; i <=size; i++)
    {
        for (j=1; j <=size; j++)
        {
            if ((i%2!=0 && j%2==0)||(i%2==0 && j%2!=0))
            {
                const fraction = document.createElement('div')
                board.appendChild(fraction);
                fraction.className="black";
            }
            else
            {
                const fraction = document.createElement('div')
                board.appendChild(fraction);
                fraction.className="white";
            }
        }
    }

}

const size = 8;
drawFraction()
