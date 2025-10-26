let arr = [1,2,3,5,7,12,9,0,];

let ans = 0;

for(ele of arr){
  if(ans < ele){
    ans = ele;
  }
}
console.log(ans);