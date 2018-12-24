let array1 = [1, 2, 3, 4, 5];

//ForEach функция
function each(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

//ForEach метод объекта Array
Array.prototype.forEachF = function(callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
}

//map для объекта array
Array.prototype.mapF = function (callback) {
  let newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray[newArray.length] = callback(this[i], i, this)
  }
  return newArray;
}

//filter для объекта array
Array.prototype.filterF = function (callback) {
  let newArray = [];
  for (var i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray[newArray.length] = this[i];
    }
  }
  return newArray;
}

array1.forEachF(function(num){
  console.log(++num);
});

let array2 = array1.mapF(function(num, index, nums) {
  return num * num;
});

let array3 = array2.filterF(function(num){
  return num > 5;
});

console.log(array2);
console.log(array3);
