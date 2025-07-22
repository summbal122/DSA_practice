function reverseInteger (x){
  let limit = Math.pow(2,31)
  let rev = 0;
  let r = 0;
  while(x !== 0){
   r = x % 10;
  if (rev > (limit - 1) / 10 || rev < (-limit) / 10) return 0; //check before updating for better time complexity
   rev = (10*rev) + r;
   x = (x /10) | 0;
  }
  return rev;
}
console.log(reverseInteger(-12465352));
console.log(Math.floor(-10.6))
