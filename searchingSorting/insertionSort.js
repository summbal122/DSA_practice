function insertionSort(arr){
  
  for(let i = 1; i < arr.length; i++){
    let curr = arr[i]
    let prev = i-1

    while(arr[prev] > curr && prev >= 0){
      arr[prev + 1] = arr[prev];
      prev--
    }
    arr[prev+1] = curr
  } 
  return arr;


}
console.log(insertionSort([7,4,3,5,1,2]))