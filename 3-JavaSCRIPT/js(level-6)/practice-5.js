function sumOfN(a){
  let sum = 0;
  for(let i = 1; i<=a; i++){
    sum += i;
  }
  return sum;
}

console.log(sumOfN(3));
sumOfN(6);