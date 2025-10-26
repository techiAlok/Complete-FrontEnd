let arr = [10,20,30,40,50,82];

if(arr.every((el) => (el%10 == 0))){
  console.log("divisible by 10");
}else{
  console.log("not divisible by 10");
}