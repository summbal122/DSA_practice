function reverseString (s){
let j = s.length-1;
let i = 0;
let temp;
while (i < j){
  if(i< j){
    temp= s[j];
    s[j] = s[i];
    s[i] = temp;
    i++;
    j--;
  } 
}
return s;
}
console.log(reverseString(["h","e","l","l","o"]))


// reverse according to K

function reverse(s, k) {
  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, s.length - 1);
    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s;
}
console.log(reverse(["h","e","l","l","o"], 2))

// without strings

function reverseStr(s, k) {
    let arr = s.split(''); // Convert string to array
    let temp;

    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);
        
        while (left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return arr.join(''); // Convert array back to string
};
console.log(reverseStr("abcdefghi", 2));