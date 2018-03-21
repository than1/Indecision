'use strict';

var square = function square(x) {
    return x * x;
};

console.log(square(8));

//arrow functions are anonymous named functions with variable.
// const squareArrow = (x) => {
//     return x * x;
// }

//single expression
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

// Challenge - use Arrow Functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular Arrow Function
// Create arrow function using shorthand syntax

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

var getFirstNameArrow = function getFirstNameArrow(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('James Monrow Sam'));
