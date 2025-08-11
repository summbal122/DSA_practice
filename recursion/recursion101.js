
function fun(x) {
  const n = 10;
  if (x > n ) return; 
  console.log(x);
  x = x + 1
  fun(x)
}

let x = 1
fun(x); // This will print 5, 4, 3, 2, 1


function sumOfNum(n){
  if(n === 0) return 0;
  return n + sumOfNum(n - 1);

}
console.log(sumOfNum(5));