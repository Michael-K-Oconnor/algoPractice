// Write a function that determines if string contains only unique chatacters

const isUnique1 = string => {
  let tracker = {};
  for (let char of string) {
    if (tracker[char]) {
      return false;
    } else {
      tracker[char] = true;
    }
  }
  return true;
};

const isUnique2 = string => {
  let arr = string.split("").sort();
  return arr.every((char, idx) => {
    return idx === 0 || !(char === string[idx - 1]);
  });
};

// console.log(isUnique1(""));
// console.log(isUnique1("a"));
// console.log(isUnique1("ab"));
// console.log(isUnique1("aa"));
// console.log(isUnique1("aba"));

console.log(isUnique2(""));
console.log(isUnique2("a"));
console.log(isUnique2("ab"));
console.log(isUnique2("aa"));
console.log(isUnique2("aba"));
