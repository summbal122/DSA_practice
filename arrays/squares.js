function sortedSqaures(nums){
  let n = nums.length;
  let left = 0;
  let right = n-1;
  let result = new Array(n);

  for (let j = n -1  ; j >= 0; j--){
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right]
     if(leftSquare > rightSquare){
       result[j]  = leftSquare;
       left ++
     } else {
      result[j] = rightSquare;
      right--
     }
  }
  for (let i = 0; i<n; i++){
    nums[i] = result[i];
  }
  return nums;
  
  }




console.log(sortedSqaures([-19,-4,-1,0,3,10, 12,14]))