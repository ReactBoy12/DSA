function findmaxConsecutive(arr) {
  let count = 0;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count = count + 1;
    }
    if (arr[i] != 1) {
      temp = count;
      count = 0;
    }
  }
  if (count > temp) {
    return count;
  } else {
    return temp;
  }
}

const result = findmaxConsecutive([0, 0, 0, 0, 0, 1]);
console.log(result);
