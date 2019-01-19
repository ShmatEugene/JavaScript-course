let deepEqual = require('./task2.js');

let obj1 = {
  'key1': 1,
  'key2': 2,
  'key3': 3
}


let obj2 = {
  'key2': 2,
  'key1': 1,
  'key3': 3
}

console.log(deepEqual.deepEqual(obj1, obj2));
