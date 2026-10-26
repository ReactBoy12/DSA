function isPalindrome(input) {
  let originalNumber = input;
  let number = originalNumber;
  let reverse = 0;
  while (number !== 0) {
    reverse = 10 * reverse + (number % 10);
    number = Math.floor(number / 10);
  }
  console.log(number);
  console.log(reverse);
  if (reverse == originalNumber) {
    return "number is palindrome";
  } else {
    return "not palindrome";
  }
}

let result = isPalindrome(1234);
console.log(result);
