const arr = [5, 3, 2, 10, 1];
function sumOfOddNumber(n) {
  if (n == 0 && arr[n] % 2 !== 0) {
    return arr[n];
  }
  if (arr[n] % 2 !== 0) {
    return arr[n] + sumOfOddNumber(n - 1);
  } else {
    return sumOfOddNumber(n - 1);
  }
}

console.log(sumOfOddNumber(arr.length - 1));
