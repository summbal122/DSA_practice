for ( let i = 0; i < 5 ; i++){
  for (let j = 0; j<2; j++){
    console.log("i =" + i, "j =" + j); //25 times it will execute
  }
}

for (let i = 0; i < 3 ; i++){
  for (let j = 0; j < i ; j++){ //when j is less than i then it will execute
     console.log(i, j)
  }

}


for (let i = 0; i < 5 ; i++){
  for (let j = 0; j<= i ; j++){ 
     console.log(i, j) //15 times it is printed
  } 

}

for (let i = 0; i<3 ; i++){
  for (let j = i; j > 0 ; j--){
    console.log("we got" + " "  + i, j)
  }
}

for (let i = 5 ; i > 0; i --){
  for (let j =0; j<i; j++){
    console.log(i, j)
  }
}