function reverseArr(arr) {
  x = arr.length - 1;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
    x = x - 1;
  }

  return arr;
}

const result = reverseArr(["h", "e", "l", "l", "o"]);
console.log(result);
