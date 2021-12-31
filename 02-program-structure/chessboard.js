/**
 * 3. Chessboard
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 * --------------
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 * --------------
 *
 * When you have a program that generates this pattern, define a binding size = 8
 * and change the program so that it works for any size, outputting a grid of the given width and height.
 */

const size = 8;
let nextLetter = " ";
let string = "";

for (let n = 1; n < size * size; n++) {
  string += nextLetter;

  if (n % size === 0) {
    string += "\n";

    if (size % 2 === 1) {
      nextLetter = nextLetter === " " ? "#" : " ";
    }
  } else {
    nextLetter = nextLetter === " " ? "#" : " ";
  }
}

console.log(string);
