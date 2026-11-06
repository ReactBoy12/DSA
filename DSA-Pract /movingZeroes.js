function movingZeroes(arr) {
  let x = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
const result = movingZeroes([0, 1, 0, 3, 12]);
console.log(result);
