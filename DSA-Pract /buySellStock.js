function BNSstock(arr) {
  let profit = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sellingPrice = arr[j] - arr[i];
      if (sellingPrice > profit) {
        profit = sellingPrice;
      }
    }
  }
  return profit;
}

const result = BNSstock([7, 1, 5, 3, 6, 4]);
console.log(result);
