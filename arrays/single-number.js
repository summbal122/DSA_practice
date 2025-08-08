function singleNumber(nums){
 let hash =[];
 for(let i = 0; i< nums.length; i++){
   if (!hash[nums[i]]){
   hash[nums[i]] =1
 }  else {
  hash[nums[i]] ++
 }
 }
 for (let i =0; i<nums.length; i++){
  if(hash[nums[i]] === 1){
    return nums[i]
  }
 }
  
}
console.log(singleNumber([4,1,2,1,2]))

//  using XOR

function singleNum(nums){
let xor = 0;
for(let i = 0; i< nums.length; i++){
  xor = xor ^ nums[i];
}
return xor;
  
}
console.log(singleNum([4,1,2,1,2,4,5,6,7,6,5]))
