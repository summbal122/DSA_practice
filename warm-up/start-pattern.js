
let n = 5
for ( let i = 0; i < n ; i++){
  let row = ""
  for(let j=0; j < n ; j++){
      row = row + "*" // 4 rows with 4* each , total 16 *
  }
  console.log(row);
}

for ( let i = 0; i < n ; i++){
  let row = ""
  for(let j=0; j <= i ; j++){
      row = row + "*" ; // the stars with increase +1 with each row
  }
  console.log(row);
}

for (let i = 0; i< n; i ++){
  let row = "";
  for ( let j = 0 ; j <= i ; j++){
    row = row + (j + 1);
  }
  console.log(row)
}

for ( let i = 0; i <= n; i++){
 let row = "";
 for (let j = 0 ; j < i ; j++ ){
  row = row + i
 }
 console.log(row);
}

for (let i = 5 ; i >= 1 ; i--){
  let row = "";
  for (let j = 0; j<i ; j++ ){
    row = row + (j+1)
  } 
  console.log(row);
}


for (let i = 5 ; i >= 1 ; i--){
  let row = "";
  for (let j = 0; j<i ; j++ ){
    row = row + "*"
  } 
  console.log(row);
}


for ( let i = 0 ; i < n ; i ++ ){
  let row = "";
  for (let j = 0; j < n - (i +1) ; j++ ){
    row = row + "-"
  } 
  for (k = 0; k< i+1; k++){
    row = row + "*"
  }
  console.log(row);
}

for ( let i = 0 ; i < n ; i ++ ){
  let row = "";
  let sw = 1;
  for (let j = 0; j <= i ; j++ ){
    row = row + sw;
    if ( sw ===1){
      sw = 0;
    } else {
      sw = 1;
    }
  } 
  console.log(row);
}


for ( let i = 0 ; i < n ; i ++ ){
  let row = "";
  let sw = 0;
  for (let j = 0; j <= i ; j++ ){
    row = row + sw;
    if ( sw ===1){
      sw = 0;
    } else {
      sw = 1;
    }
  } 
  console.log(row);
}




