// function removeDuplicates(arr) {
//   let newArr = [];
//   let numTemp = null;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== numTemp) {
//       newArr[i] = arr[i];
//     } else {
//       continue;
//     }
//     numTemp = arr[i];
//   }
//   return newArr;
// }

// let result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(result);

function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }

  for (let i = x + 1; i < arr.length; i++) {
    arr[i] = "_";
  }
  return arr;
}

let result = removeDuplicates([
  0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 7, 7, 7, 7, 9, 9, 9, 0, 0, 0, 0,
]);
console.log(result);
