let num = 287152;
let tmp = 0;
while(num > 0){
  num = (num/10) | 0;
  tmp++;
}
console.log(tmp);