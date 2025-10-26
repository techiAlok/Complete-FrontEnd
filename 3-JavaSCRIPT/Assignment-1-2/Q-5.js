// WAP to find largest of 3 numbers

let num1 = 1;
let num2 = 5;
let num3 = 8;

if((num1>num2) && (num1>num3)){
  console.log(`${num1} is largest than ${num2} and ${num3}.`)
}else if((num2>num1) && (num2>num3)){
  console.log(`${num2} is largest than ${num1} and ${num3}.`)
}else{
  console.log(`${num3} is largest than ${num2} and ${num1}.`)
}