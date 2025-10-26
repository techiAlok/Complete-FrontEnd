let num = 4;
let ans = 1;
if(num <= 1){
  console.log("1");
}else{
  for(let i = 2;i<=num;i++){
    ans = i*ans;
  }
  console.log(ans);
}