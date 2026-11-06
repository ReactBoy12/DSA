function missingNumber(arr) {
  let n = arr.length;
  let summation = (n * (n + 1)) / 2;
  let sum = 0;
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  number = summation - sum;
  return number;
}

const result = missingNumber([]);
console.log(result);
