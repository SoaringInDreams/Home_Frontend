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

outer: while (true){
    for (var i in users) {
        if (users[i].name === name) {
            var password = prompt("Enter your password", "");
            if (password === String(users[i].password)) {
                alert("Succeeded");
                break outer;
            } else {
                alert("Wrong password!!!");
            }
        }
    }
    var name = prompt("Enter your name", "");
}

// * Your code End *
