'use strict';

var testFunc = function testFunc(msg) {
  return console.log('This is your ' + msg);
};
var test = document.createElement('h1');
test.textContent = 'No I can\'t believe it!';

var i = ['1', 2];
console.log('Testing from other.js');

var wow = ['test', 'test2'];
testFunc('Wow wow it works!');

console.log(wow);
console.log(i);
document.body.appendChild(test);
//# sourceMappingURL=app.js.map
