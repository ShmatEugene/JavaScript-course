function isSomeTrue(source, filterFn) {
  if(source.length == 0) {
    throw new Error('Массив не должен быть пустой');
  }

  var res = false;
  for(let i = 0; i < source.length; i++) {
    if(filterFn(source[i]) == true) res = true;
  }
  return res;
}

function isNumber(val) {
  return typeof val === 'number';
}

module.exports.isSomeTrue = isSomeTrue;
module.exports.isNumber = isNumber;
