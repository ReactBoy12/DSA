// function findLargestNumber(arr) {
//   if (arr.length != 0) {
//     let largestNumber = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr.length != 0) {
//         if (arr[i] > largestNumber) {
//           largestNumber = arr[i];
//         }
//       }
//     }
//     return largestNumber;
//   } else {
//     return "EMPTY ARRAY";
//   }
// }
// let arr = [null, undefined, 10];
// const result = findLargestNumber(arr);
// console.log(result);

function findSmallestNumber(arr) {
  if (arr.length != 0) {
    let smallestNumber = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr.length != 0) {
        if (arr[i] < smallestNumber) {
          smallestNumber = arr[i];
        }
      }
    }
    return smallestNumber;
  } else {
    return "EMPTY ARRAY";
  }
}
let arr = [1, 5, 3, 8, -2, 7, 8];
const result = findSmallestNumber(arr);
console.log(result);
