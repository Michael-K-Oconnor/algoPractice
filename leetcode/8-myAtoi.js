var myAtoi = function(str) {
  let firstStr = str.split(" ").filter(elem => elem !== "")[0];
  if (!firstStr) return 0;
  let sign = 1;
  if (!"-+0123456789".includes(firstStr[0])) {
    return 0;
  } else if (firstStr[0] === "-") {
    sign = -1;
    firstStr = firstStr.slice(1);
  } else if (firstStr[0] === "+") {
    firstStr = firstStr.slice(1);
  }
  for (let i = 0; i < firstStr.length; i++) {
    if (!"1234567890".includes(firstStr[i])) {
      let num = sign * Number(firstStr.slice(0, i));
      if (num < 0) {
        return Math.max(num, Math.pow(-2, 31));
      } else {
        return Math.min(num, Math.pow(2, 31) - 1);
      }
    }
  }
  let num = sign * Number(firstStr);
  if (num < 0) {
    return Math.max(num, Math.pow(-2, 31));
  } else {
    return Math.min(num, Math.pow(2, 31) - 1);
  }
};
