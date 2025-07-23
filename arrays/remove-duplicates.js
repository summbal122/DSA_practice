function removeDuplicates(nums){
  let k =0;
 for (let i = 1 ; i < nums.length; i++){
  if (nums[i] !== nums[k]){
    k++
    nums[k] = nums[i]
  }
 }
 return nums.slice(0, k + 1);
  }
console.log(removeDuplicates([1,2,2,4,6,7,8,9,9,10,11,11,13,15,18,20]))