const arr = [1,2,3,4]
console.log(arr);

// using for loop
for( let i=0 ; i< arr.length ; i++){
  arr[i] = arr[i] * 2; //changing in the same array, replacing double of the number
}
console.log(arr);



// using forEach
arr.forEach((value, index) => {
 arr[index] = value * 2
})
console.log("array" + arr);


//filter greater than 10
const arrFilter = [5,10,20,45];
let filteredArr = [];
const greaterThan = () => {
  for(let i=0; i <arrFilter.length ; i++ ){
  if(arrFilter[i] > 10 ) {
    filteredArr.push(arr[i]);
  }
}
   return filteredArr;
}
console.log(greaterThan());



//filter first index
const firstIndex= () => {
  console.log(arrFilter[0]);
}
firstIndex();



// reverse
const arrayReverse = [4,6,7,8,9,12,14];
let j = arrayReverse.length -1 
const reverseArray = () => {
  for (let i=0; i <j ; i++ , j--){
   let temp = arrayReverse[i];
    arrayReverse[i] = arrayReverse[j]
    arrayReverse[j] = temp;
     
  } 
  return arrayReverse;
}

console.log("reverse of array is: " + reverseArray())



// linear search
const arraySearch = [-3,2,4,11,25,30];
const num = 5;
const searchNum = () => {
  for ( let i=0; i< arraySearch.length ; i++){
  if(arraySearch[i] === num){
    return num;
  }  
}
return -1;
}
console.log(searchNum());


// max min
let max = arraySearch[0];
let min = arraySearch[0];
for (let i=0; i< arraySearch.length; i++){
 if (arraySearch[i] < max ) {
      min = arraySearch[i]
 }
 if( arraySearch[i] > min){
  max = arraySearch[i]
 }
}

console.log("max"+ max);
console.log("min"+ min);

//intersection of 2 arrays (sorted)

const array1 = [1,2,3,7,9];
const array2 = [2,4,5,7,9];
let intersection = [];
let i = 0;
let k = 0;
const findIntersection = () => {
  while(i < array1.length && k < array2.length){
 if (array1[i] === array2[k]) {
  intersection.push(array1[i]);
  i ++ ;
  k ++;
 } else if ( array1[i] > array2[k]){
     k ++ ;
 } else {
  i ++;
 }

}
return intersection;
}
console.log("intersection of two arrays: " + findIntersection())


//intersection (unsorted)

const arr1 = [2,5,8,9,9,1];
const arr2 = [3,7,4,7,1];
const set1 = new Set (arr1);
const result = new Set (); 
const intersectionUnsorted = () => {
  for ( let num of arr2)
    if (set1.has(num)){
      result.add(num);
    }
    return [...result];
  
}
console.log("intersection of unsorted arrays is " + intersectionUnsorted());

// Two sum, array and a target

const targetArray = [1,3,5,6,7,10,11,13,14,17,18,22];
const target = 22;
const findTarget = ()=> {
  for (let i = 0, p= 1; p < targetArray.length ; i++ , p++ ){
    if (targetArray[i] + targetArray[p] === target) {
      return [i, p]
    }  
  }
  return -1
 
}
console.log(findTarget())

// array has duplicates