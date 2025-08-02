function moveZeros(nums) {
  let i = 0;
  let temp;
  while (i < nums.length) {
    let k = i + 1;
    while (k < nums.length && nums[k] === 0) {
      k++;
    }
    if (nums[i] === 0 && k < nums.length) {
      temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
    }
    i++;
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12,0,19,0,22,0,0,4])); // ✅ [1, 3, 12, 0, 0]

// for faster  runtime
function moveZeroes(nums) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== lastNonZeroIndex) {
        let temp = nums[i];
        nums[i] = nums[lastNonZeroIndex];
        nums[lastNonZeroIndex] = temp;
      }
      lastNonZeroIndex++;
    }
  }
  return nums;
};
console.log(moveZeroes([1,4,0,5,0,7,9,0,11,15,16,0]))

