function sumOfNumbers(num) {
  if (num < 1) {
    console.log("Sum of numbers is: " + num);
    return;
  }
  num = num - 1;
  sum = sum + num;
  sumOfNumbers(num);
}
sum = 0;
console.log(sumOfNumbers(5));
