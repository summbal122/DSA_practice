function missingNumber(nums) {
const set = new Set(nums);
for (let i = 0; i <= nums.length; i ++){
  if(!set.has(i)){
    return i
  }
}
}
console.log(missingNumber([0,1,5,6,7,8,9,2,4]))

// by formula

function missingNum (nums){
  let n = nums.length
 const sum = n * (n + 1) / 2
 let sumOfNums =  0
 for (let i = 0; i< n; i++){
  sumOfNums = sumOfNums + nums[i]
 }
 return sum - sumOfNums;
}
console.log(missingNum([0,1,5,6,7,8,9,2,4]))