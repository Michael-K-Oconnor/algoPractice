const stringCompression = string => {
  let result = "";
  let currChar = string[0];
  let currCharLen = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === currChar) {
      currCharLen++;
    } else {
      result = result + currChar + currCharLen;
      currChar = string[i];
      currCharLen = 1;
    }
  }
  result = result + currChar + currCharLen;
  if (result.length < string.length) {
    return result;
  } else {
    return string;
  }
};

function assert(expectedBehavior, descriptionOfCorrectBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfCorrectBehavior);
  } else {
    console.log("test passed");
  }
}

assert(stringCompression("") === "", "Empty string should return empty string");
