let num1 = 329;
let num2 = 47852;
let ld1 = num1%10;
let ld2 = num2%10;
if(ld1 == ld2){
  console.log(`Have same last digit ${ld1}`);
}else{
  console.log(`Not same ${ld1} and ${ld2}`);
}