function countDigit(num) {
  let digit = 0;
  if (typeof num != "string") {
    num = Math.abs(num);
    if (num == 0) {
      return 1;
    }
    while (num != 0) {
      num = Math.floor(num / 10);
      digit = digit + 1;
    }
    return digit;
  } else {
    return NaN;
  }
}
let result = countDigit("0");
console.log(result);
