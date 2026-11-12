const arr = [5, 5, 1];
let i = 0;
let n = arr.length - 1;
let sum = 0;
function sumOfArr() {
  if (i > n) {
    return;
  }
  sum = sum + arr[i];
  i = i + 1;

  sumOfArr();
}
sumOfArr();
console.log(sum);
