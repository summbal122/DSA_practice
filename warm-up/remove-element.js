const array = [1,2,3,4,9,1,2,11,2,13, 1,2,3,4,5,7,8];
const removeElement = () => {
  const value = 10;
  let k = 0;
  for (let i = 0; i <array.length; i++){
    if(array[i] !== value){
     array[k] = array[i]
     k++
    }
    } 
    array.length = k;
    return array;
  } 

console.log(removeElement());