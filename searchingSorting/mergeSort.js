function mergeSort(arr) {
  if(arr.length <=1) return arr;
  let mid = Math.floor((arr.length)/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)


  function merge(left, right){
    res = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
      if(left[i] < right[j]){
        res.push(left[i]);
        i++
      } else {
        res.push(right[j])
        j++
      }
    } return [...res, ...left.slice(i), ...right.slice(j)] //merge two into a single array
  }

}
console.log(mergeSort([5,3,2,1]))