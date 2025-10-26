function largeElement(num,arr){
  let ans = [];
  let i = 0;
  for(ele of arr){
    if(ele > num){
      ans[i]=ele;
      i++;
    }
  }
  return ans;
}


let res = largeElement(5,[1,4,12,6,2,46]);
console.log(res);