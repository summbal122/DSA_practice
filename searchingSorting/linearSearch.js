//linear search
function target(n, arr){
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] === n){
      return i;
    } 
  }
 return false
}
console.log(target(4, [1,5,7,8,6,1,4])) 