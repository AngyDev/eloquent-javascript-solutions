/**
 * 2. Reversing an array
 * 
 * Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace.
 * The first, reverseArray, takes an array as argument and produces a new array that has the same elements in
 * the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
 * it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
 *
 * Which variant do you expect to be useful in more situations? Which one runs faster?
 */

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(array) {
  let index = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    let number = array[i];
    array[i] = array[index - i];
    array[index - i] = number;
  }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
