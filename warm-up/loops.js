for (i = 3; i < 10; i =i+2){ // can increment + 2 everytime
  console.log("hello" + i)
}

for ( i = 5 ; i > 0; i--){
  console.log("hello" + i)
}

let arr = [10,6,2,0,8,3,7];

for (let i = 0 ; i < arr.length ; i++){
  console.log(arr[i]);
}


//print even numbers from the array. 
for( i = 0 ; i < arr.length ; i++){
  if (arr[i]%2 === 0){
     console.log(arr[i]);
  }
 
}

// While LOOP
let j = 0 
while (j<10){
  console.log("while loop");
  j++
}

const array = [1,3,6,7,9,12,14];
function searchNumber () {
for ( let i = 0; i < array.length; i++){
  if(array[i] === 6){
    return i
  }
}
return -1
}
console.log(searchNumber());


function negativeNumbersCount (arr){
  let count = 0;
  for (let i = 0; i < arr.length ; i++){
    if(arr[i] < 0 ){
      count ++
    } 
  }
  return count === 0 ? -1 : count;
}
console.log(negativeNumbersCount([0,3,7,9]));


function largestInArray (array){
  let j = array[0] //also do -Infinity(in js) compare with lowest or largest. it is a better way
  for (let i = 0; i < array.length; i ++){
    if (array[i] > j ){
      j = array[i];
    }
  } return j;
}
console.log(largestInArray([22,4,6,8,11,12,17]));

//find the second largest

function largestOddInString (num){
  let digit = num.split("").map(Number);
  let largest = -1
  for (let i = 0 ; i< digit.length ; i++){
    if(digit[i] % 2 !== 0 && digit[i] > largest){
      largest = digit[i];
    }
  } return largest;

}

console.log(largestOddInString("941238"));


// largest odd in substrings also

let str = "35479";
function oddInStrings() {
  let largestNum = -1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let digits = str.slice(i, j);
      let num = Number(digits);

      if (num % 2 !== 0 && num > largestNum) {
        largestNum = num;
      }
    }
  }

  return largestNum === -1 ? "" : String(largestNum); // Return as string, or "" if no odd
}
console.log(oddInStrings()); // Output: "5479"


// return the largestSubstring
function largestOddInSubstring(num){
  for (let i =num.length-1 ; i >=0 ; i--){
    if(parseInt(num[i]) % 2 !==0 ){
      return num.slice(0, i+1) // i is where the i found odd number
    }
  } return ""
}
console.log(largestOddInSubstring("124875048538302474058"));

// count digit


function countdigits(num){
  num = Math.abs(num); //corner case for negative numbers
  if (num === 0 ) {
    return 1;
  }
  let count = 0;
  while ( num > 0 ){
   num = Math.floor(num/10);
  count = count + 1;

  }
   return count;
}

console.log("digits : " + countdigits(-583252350232363));

console.log(Math.round(967.3));
console.log(Math.floor(2.7));
console.log(Math.ceil(3.2));