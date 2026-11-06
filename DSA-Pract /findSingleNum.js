// function findSingleNum(arr) {
//   let hashMap = {};
//   // hashMap[8] = 99;
//   // console.log(hashMap);

//   for (let i = 0; i < arr.length; i++) {
//     // if (hashMap[arr[i]]) {
//     //   hashMap[arr[i]] = 1;
//     // }
//     if (!hashMap[arr[i]]) {
//       hashMap[arr[i]] = 1;
//     } else {
//       hashMap[arr[i]]++;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (hashMap[arr[i]] == 1) {
//       return arr[i];
//     }
//   }
//   console.log(hashMap);
// }

// const result = findSingleNum([1, 6, 8, 2, 1, 6, 8]);
// console.log(result);

function findSingleNum(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
    console.log(xor);
  }
}

const result = findSingleNum([1, 6, 8, 2, 1, 6, 8]);
console.log(result);
