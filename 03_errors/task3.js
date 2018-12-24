function calculator(firstNumber) {
  var funcObj = {
    sum: function() {
      res = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        res += arguments[i];
      }
      return res;
    },
    dif: function() {
      res = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        res -= arguments[i];
      }
      return res;
    },
    mul: function() {
      res = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        res *= arguments[i];
      }
      return res;
    },
    div: function() {
      res = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        res /= arguments[i];
      }
      return res;
    }
  }

  return funcObj;
}

module.exports.calculator = calculator;
