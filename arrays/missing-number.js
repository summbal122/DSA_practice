function missingNumber(nums) {
const set = new Set(nums);
for (let i = 0; i < nums.length; i ++){
  if(!set.has(i)){
    return i
  }
}
}
console.log(missingNumber([0,1,5,6,7,8,9,2,4]))