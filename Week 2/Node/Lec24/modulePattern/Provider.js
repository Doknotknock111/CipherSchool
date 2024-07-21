

var counter = (arr) => {
    return "Thix array has " + arr.length +" items";
}

// es6 feature 
let addition = (a, b) => `The sum is ${a+b}`;

const constant = 9.776;

// module.exports.counter = counter;
// module.exports.addition = addition;
// module.exports.constant = constant;

module.exports = {
    counter, 
    addition,
    constant: constant
}