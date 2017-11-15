console.log('Hello world');

var calc = require('./calc') // custom module
var os =  require('os'); // installed module
var math = require('mathjs'); // third party module
console.log(os.hostname());

console.log(math.sum(2,4));

console.log(calc.sum(2,8));


// Every JS is module.
// Every var 
