function secondLargestNumber(arr) {
  let largestNumberNum = -Infinity;
  let secondLargestNum = -Infinity;
  if (arr.length == 1 || arr.length == 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumberNum) {
      secondLargestNum = largestNumberNum;
      largestNumberNum = arr[i];
    } else if (arr[i] > secondLargestNum && arr[i] != largestNumberNum) {
      secondLargestNum = arr[i];
    }
  }
  return secondLargestNum;
}
const arr = [10, 20, 20, 5, 3, 7, 8, 20, 10, 6, 11, 11];
const result = secondLargestNumber(arr);
console.log(result);
