const stringCompression = string => {
  let result = "";
  let currChar = string[0];
  let currCharLen = 1;
  for (let i = 1; i <= string.length; i++) {
    if (string[i] === currChar) {
      currCharLen++;
    } else {
      result += currChar + currCharLen;
      currChar = string[i];
      currCharLen = 1;
    }
  }
  return result.length < string.length ? result : string;
};

function assert(expectedBehavior, descriptionOfCorrectBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfCorrectBehavior);
  } else {
    console.log("test passed");
  }
}

assert(stringCompression("") === "", "Empty string should return empty string");
console.log(stringCompression("aaabbbbaaa"));
console.log(stringCompression("aa"));
