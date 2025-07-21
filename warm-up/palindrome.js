
function palindrome(x) {
    const original = x
    if (x < 0) return false; //negative number is not palindrome
    let rev = 0;

    while(x > 0){
        let r = x % 10;
        rev = (10* rev)+ r
        x = Math.floor(x / 10)
        }  
        if (rev === original){
        return true;
      } else {
      return false; 
     }
    
};
console.log(palindrome(-121.689));