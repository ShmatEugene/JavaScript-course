var task1 = require('./index.js');
var task2 = require('./task_2.js');

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'],
empty = [];

//task1
if((task1.isAllTrue(allNumbers, task1.isNumber)) == false) console.error("Ошибка тест 1.1");
if((task1.isAllTrue(someNumbers, task1.isNumber)) == true) console.error('Ошибка тест 1.2');
if((task1.isAllTrue(noNumbers, task1.isNumber)) == true) console.error('Ошибка тест 1.3');

//task2
if((task2.isSomeTrue(allNumbers, task2.isNumber)) == false) console.error("Ошибка тест 2.1");
if((task2.isSomeTrue(someNumbers, task2.isNumber)) == false) console.error('Ошибка тест 2.2');
if((task2.isSomeTrue(noNumbers, task2.isNumber)) == true) console.error('Ошибка тест 2.3');

try{
  task1.isAllTrue(empty, task1.isNumber);
} catch(e) {
  console.log(e.message);
}

//Функция для автоматической проверки (arguments - массивы)
function testFilter(task, taskFn) {
  for (let i = 2; i < arguments.length; i++) {
    console.log(taskFn(arguments[i], task.isNumber));
  }
}
