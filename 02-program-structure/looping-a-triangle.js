/**
 * 1. Looping A Triangle
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * --------------
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * --------------
 * It may be useful to know that you can find the length of a string by writing .length after it.
 * --------------
 *   let abc = "abc";
 *  console.log(abc.length);
 *  // → 3
 * --------------
 */

/**
 * For solution
 */
for (let string = "#"; string.length < 8; string += "#") {
  console.log(string);
}

/**
 * Another solution using the while loop
 */
let number = 1;
let string = "#";

while (number < 8) {
  console.log(string);
  string = string + "#";
  number++;
}
