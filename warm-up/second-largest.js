// second largest

const array = [2,4,6,8,9,5,11];
function secondLargest () {
  let first = -Infinity;
  let second = -Infinity;
  for ( let i = 0 ; i < array.length; i ++){
    if (array[i] > first){
      second = first
      first = array[i]
    } else if (array[i] < first && array[i]> second){
      second = array[i]

    }
  } return second;

}
console.log(secondLargest()); // must have a corner case