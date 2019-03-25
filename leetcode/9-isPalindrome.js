/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // let str = '' + x;
  // return str === str.split('').reverse().join('');
  if (x < 0) return false;
  let tempX = x;
  let digits = 0;
  while (tempX >= 1) {
    digits++;
    tempX /= 10;
  }
  tempX = x;
  let reversedX = 0;
  while (tempX >= 1) {
    reversedX += (tempX % 10) * Math.pow(10, digits - 1);
    digits--;
    tempX = Math.floor(tempX / 10);
  }
  return x === reversedX;
};
