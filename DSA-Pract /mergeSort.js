function mergeSort(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 < 0 || nums2[p2] > nums1[p1]) {
      nums1[i] = nums2[p2];
      p2--;
    } else {
      nums1[i] = nums1[p1];
      p1--;
    }
  }
  return nums1;
}

const result = mergeSort([1, 2, 3], [3, 4, 8]);
console.log(result);
