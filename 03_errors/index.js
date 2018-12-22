function isAllTrue(source, filterFn) {
  if(source.length == 0) {
    throw new Error('Массив не должен быть пустой');
  }
  var res = true;
  for(let i = 0; i < source.length; i++) {
    if(filterFn(source[i]) == false) res = false;
  }
  return res;
}

function isNumber(val) {
  return typeof val === 'number';
}

module.exports.isAllTrue = isAllTrue;
module.exports.isNumber = isNumber;
