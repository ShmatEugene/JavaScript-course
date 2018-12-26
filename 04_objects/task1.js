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

//reduce
Array.prototype.reduceF = function(callback, startValue) {
  let res = startValue;
  for (var i = 0; i < this.length; i++) {
    res = callback(res, this[i], i, this);
  }
  return res;
}

//slice
Array.prototype.sliceF = function(sliceStart, sliceEnd) {
  let newArray = [];

  if(!sliceStart) {
    sliceStart = 0;
  }
  if(!sliceEnd) {
    sliceEnd = this.length;
  }

  if (sliceStart < 0) sliceStart = this.length + sliceStart;
  if (sliceEnd < 0) sliceEnd = this.length + sliceEnd;

  for (var i = 0; i < this.length; i++) {
    if((i > sliceStart - 1) && (i <= sliceEnd - 1)) {
      newArray[newArray.length] = this[i];
    }
  }

  return newArray;
}

array1.forEachF(function(num){
  //console.log(++num);
});

let array2 = array1.mapF(function(num, index, nums) {
  return num * num;
});

let array3 = array2.filterF(function(num){
  return num > 5;
});

let array4 = array1.reduceF(function(startNum, num) {
  return startNum + num;
}, 1)

let array5 = array1.sliceF(-4, -2);
let array6 = array1.slice(-4, -2);

//console.log(array2);
//console.log(array3);
//console.log(array4);
console.log(array5);
console.log(array6);
