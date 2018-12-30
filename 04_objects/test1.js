let task1 = require('./task1.js');

function getRandomValues(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let array = [];
let arrayLength = getRandomValues(1, 10);

for (var i = 0; i < arrayLength ; i++) {
  array[i] = getRandomValues(-50, 50);
}
