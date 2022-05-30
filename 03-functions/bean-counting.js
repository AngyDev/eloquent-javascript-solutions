/**
 * 3. Bean Counting
 * Write a function countBs that takes a string as its only argument and returns a number
 * that indicates how many uppercase “B” characters there are in the string.
 *
 * Next, write a function called countChar that behaves like countBs,
 * except it takes a second argument that indicates the character that is to be counted
 * (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
 */

function countBs(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(string, el) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === el) {
      count++;
    }
  }

  return count;
}

// Rewrite countBs to make use of countChar function
function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// Rewrite the function using the closure function
const countBs = (letter) => {
  return string => countChar(string, letter);
}

const letterB = countBs("B");
console.log(letterB("BATCH"));
// -> 1
