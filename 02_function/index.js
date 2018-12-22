function consoleRec(array, index) {
  console.log(array[index++]);

  if(index < array.length) consoleRec(array, index);
}

var each = function(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

module.exports.consoleRec = consoleRec;
module.exports.each = each;
