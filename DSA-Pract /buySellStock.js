// function BNSstock(arr) {
//   let profit = null;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sellingPrice = arr[j] - arr[i];
//       if (sellingPrice > profit) {
//         profit = sellingPrice;
//       }
//     }
//   }
//   return profit;
// }

// const result = BNSstock([7, 1, 5, 3, 6, 4]);
// console.log(result);

function BNSstock(arr) {
  let profit = 0;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min > profit) {
      profit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
      // console.log(min);
    }
  }
  return profit;
}

const result = BNSstock([7, 1, 5, 3, 6, 4]);
console.log(result);
