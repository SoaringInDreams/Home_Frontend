console.clear();

// ## 0 Работа с функциями
//
// Напишите функцию которая возвращала б сумму всех введенных аргументов
// Если один из аргументов не число, вывод сообщения "Все аргументы должны быть числовыми"

// * Your code Start *

function argumentsSumm() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number' && !isNaN(arguments[i])){
          sum += parseInt(arguments[i]);
        }else {
            return "Все аргументы должны быть числовыми";
        }
    }
   return sum;

}

// * Your code End *

console.log(argumentsSumm(10, 20, 50, 4, 17))   // 97
console.log(argumentsSumm(0, 1, 1, -1, 1))      // 3
console.log(argumentsSumm(4, 'lol', 0))         // Все аргументы должны быть числовыми
console.log(argumentsSumm(NaN, 4, 6, 4, 0))     // Все аргументы должны быть числовыми


// ## Замыкания
//
// Посмотрите на код внизу
// Обьясните почему он работает именно так
// Перепишите код так, что б он работал корректно



// * Your code Start *

var funcArrays = function () {
  var arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push((function(i) {
        return function () {
            return i
        }

    }(i)));
  }

  return arr;
}

// * Your code End *

var func = funcArrays();

console.log(func[1]()); // Выводит 5, а должно вывести 1
console.log(func[3]()); // Выводит 5, а должно вывести 3


// ## Callback функции
//
// Создайте функцию которая принимает 2 числовых значения
// Третьим аргументом функции должна быть функция, которая будет манипулировать этими агументами

// * Your code Start *
var callback = function(a, b, callbackFunc){
    return callbackFunc(a, b)
}


// * Your code End *

console.log(callback(20, 10, function (a, b){
  return a + b
})) // 30

console.log(callback(20, 10, function(a, b){
  return a - b
})) // 10

console.log(callback(20, 10, function(a, b){
  return a * b
})) // 200



// ## Работа с массивами
// Совсестите массив и строку с именами именно в таком порядке, как показанно в комментариях в строке.
// Порядок действий:
// * Разберите namesString на массив
// * Добавьте новый массив в oldArray, после первого элемента массива
// * Сделайте инверсию массива
// * Превтатите полученный массив в строку используя разделитель '|'

var oldArray = ['Dave Burt', 'Sylvanus Jeremiah'];
var namesString = 'Hartley Evander, Kole Grady';

// * Your code Start *
var newArray = namesString.split(", ");
//console.log(newArray);
for (var i = 0;i < newArray.length;i++){
    oldArray.splice(i+1,0,newArray[i])
}

//console.log(oldArray);
var upgReverse = oldArray.reverse();
//console.log(upgReverse);
var fullRevertArrayString = upgReverse.join(' | ');

// * Your code End *

console.log(fullRevertArrayString) // Должен вывести - 'Sylvanus Jeremiah | Kole Grady | Hartley Evander | Dave Burt'


// ## Методы перебора массива
//
// Задача создать 4 функции которые создают новый массив
// Во всех кейсах за основу берется массив itDepartment

var itDepartment = [
  { first: 'Philip', last: 'Bradley', born: 1979, possition: 'Back-end' },
  { first: 'Phil', last: 'Harmon', born: 1983, possition: 'Front-end' },
  { first: 'Marty', last: 'Ormond', born: 1991, possition: 'Front-end' },
  { first: 'Silvester', last: 'Rod', born: 1987, possition: 'QA' },
  { first: 'Johannes', last: 'Planck', born: 1971, possition: 'Front-end' },
  { first: 'Reynard', last: 'Christopher', born: 1973, possition: 'QA' },
  { first: 'Max', last: 'Forrest', born: 1988, possition: 'Managet' },
];

// * Your code Start *
var fullNames = itDepartment.map(function(names){
    var fullName = names.first + " " + names.last;
    return fullName;
});

var filtered = itDepartment.filter(function(item){
    return item.possition.match(/\-end$/);
});

var sorted = itDepartment.sort(function(itemA, itemB){
    var currentYear = new Date().getFullYear();
    return currentYear - itemA.born > currentYear - itemB.born
});

var counter = itDepartment.reduce(function(obj, item){
    var possition = item.possition;
    if(!obj[possition]){
        obj[possition] = 0;
    }
    obj[possition] += 1;
    return obj;
}, {});


// * Your code End *

// map(); Создайте массив в котором будут имена и фамилии всех работников It департамента. (В формате Philip Bradley)
console.dir(fullNames);

// filter(); Отфильтруйте всех разработчиков (Developer) И выведете их имена и должности
console.table(filtered);

// sort(); Отсортируйте массив по возрасту работников. По убыванию. ()Подсказака: используйте конструктор new Data())
console.table(sorted);

// reduce(); Узнайте сколько всего разработчико разных должностей. Например:
// Front-end: 2,
// Back-end: 1,
// QA: 2
// Manager: 1

console.log(counter);
