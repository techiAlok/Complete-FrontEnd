let str = ["hi","Alok", "how yo're","doing ?","Well","How was your","day"];

function concat(arr ){
  let result = "";
  for(let i=0; i<arr.length; i++){
    result = result+" "+arr[i];
  }
  return result;
}

console.log(concat(str));

// function out(){
//   let x = 5;
//   let y= 8;
//   function inn(){
//     console.log(x);
//     console.log(y);
//   }
//   inn();
  
// }