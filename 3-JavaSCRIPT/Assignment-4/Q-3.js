let num = 287152;

let sum=0;
while(num >0){
  sum = sum+Math.floor(num%10)
  num = (num/10) | 0;
}

console.log(sum);