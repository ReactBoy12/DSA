function removeElements(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

const result = removeElements([3, 2, 2, 3, 6, 6, 7, 7, 88, 9, 3, 3], 3);
console.log(result);
