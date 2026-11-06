function printNumber(n, num) {
  if (num > n) return;
  console.log(num);
  num = num + 1;
  printNumber(n, num);
}

let n = 5;
printNumber(n, 1);
