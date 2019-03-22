/**
 * @param {string} s
 * @return {string}
 */

// In: str
// Out: str, Longest pallindromic substr
// Assumes: case-insensitive, special characters treated as normal characters
// Edges: empty str, str.length = 1, no pallindrome in str

// iterate through charaters
// iterate from back of str to curr Longest len
//if substr is palindrome, set longest and break
// if longest > s.len - i, break;

var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let longest = s[0];
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i + longest.length; j--) {
      let currStr = s.slice(i, j);
      if (isPalindrome(currStr)) {
        if (currStr.length > longest.length) {
          longest = currStr;
        }
        break;
      }
    }
  }
  return longest;
};

const isPalindrome = s => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
