// printHello(); // can't acess before intitialization because function expression assigned to a const, so it inherits its behaviour
const  printHello = () => {
   console.log("arrow function")
}

printHelloFun("sumbal", 22); //this function we can call before initializing it., these are called arguments
function printHelloFun(name, age) { //name age are parameters
console.log(name + " " + age);
printHello();
}

// if-else
function eligibility (age){
  if (age >= 18){
    return "eligible to vote"
  } else if (age <= 0) { 
    return "not valid age"
  }
    else {
    return "not eligible"
  }
}
 console.log(eligibility(40));


 // number is even or odd
 function checkNumber  (num) {
  if (num % 2 === 0) {
    console.log(num + " " + "is even")
  } else {
    console.log(num + "" +  "is odd")
  }
 }
 checkNumber(4)
