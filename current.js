// Write a function that takes in two strings and determines if they are permutations of each other

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let [arr1, arr2] = [[], []];
  for (let i = 0; i < str1.length; i++) {
    let [charIdx1, charIdx2] = [str1.charCodeAt(i), str2.charCodeAt(i)];
    if (arr1[charIdx1]) {
      arr1[charIdx1]++;
    } else {
      arr1[charIdx1] = 1;
    }
    if (arr2[charIdx2]) {
      arr2[charIdx2]++;
    } else {
      arr2[charIdx2] = 1;
    }
  }
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(isPermutation("abc", "cba"));
console.log(isPermutation("abc", "cbac"));
console.log(isPermutation("", "cba"));
console.log(isPermutation("", ""));
