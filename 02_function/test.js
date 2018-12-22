let test = require('./index.js');

let array = ['1', '2', '3', '4'];

test.consoleRec(array, 0);
test.each(array, function(num, i, nums){
  console.log(num * num);
});
