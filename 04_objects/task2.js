function isNumber(n) {
  return !isNaN(parseFloat(n) && isFinite(n));
}

function deepEqual(obj1, obj2) {
  if(obj1)

  var compareObj1 = obj1,
      compareObj2 = obj2;

  for(key in obj1) {
    console.log(key);
    console.log(obj1.key);
  }

  /*
  for (obj1Key in compareObj1) {
    if(isNumber(compareObj[obj1Key])) {
      for(obj2Key in compareObj2) {
        if(isNumber(compareObj2[obj2Key])) {
          if(compareObj1[obj1Key] == compareObj2[obj2Key]) {

          }
        }
      }
    }
  }
  */
}

module.exports.deepEqual = deepEqual;
