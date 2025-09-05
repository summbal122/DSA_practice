
function splitArray(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;

    if (count[arr[i]] > 2) {
      return false;
    }
  }

  return true;
}

console.log(splitArray([1,1,2,2,3,4])); // true