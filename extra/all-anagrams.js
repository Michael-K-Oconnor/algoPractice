// All Anagrams
// Given a single input string, write a function
// that produces all possible anagrams of a string
// and outputs them as an array. At first, don’t
// worry about repeated strings. What time
// complexity is your solution?

function allAnagrams(string) {
  let solutions = [];

  const recursiveHelper = (remainingString, currString = "") => {
    if (!remainingString.length) {
      solutions.push(currString);
    } else {
      for (let i = 0; i < remainingString.length; i++) {
        let newCurrString = currString + remainingString[i];
        let newRemainingString =
          remainingString.slice(0, i) + remainingString.slice(i + 1);
        recursiveHelper(newRemainingString, newCurrString);
      }
    }
  };

  recursiveHelper(string);
  return [...new Set(solutions)];
}
