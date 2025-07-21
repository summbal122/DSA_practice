function findDuplicate(num){
 for (let i = 0; i < num.length; i ++){
  for (let j = i+1; j < num.length; j++){
    if (num[i] === num[j]){
      return true;
    }

  }
 } return false;

}
console.log(findDuplicate([1,3,5,7,9,2,1,1,2,2,3]))


function duplicate(nums) {
   const present = new Set();
   for (let num of nums){
    if(present.has(num)){
        return true;
    } else {
        present.add(num);
    }
   }
   return false;
    
};
console.log(duplicate([])) // for better complexity, larger arrays