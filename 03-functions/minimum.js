/**
 * 1. Minimum
 * Write a function min that takes two arguments and returns their minimum.
 */

// Using function declaration
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Using function expression
const min = function (a, b) {
  return a < b ? a : b;
};

//Using arrow function
const min = (a, b) => (a < b ? a : b);

console.log(min(0, 10));
console.log(min(0, -10));
