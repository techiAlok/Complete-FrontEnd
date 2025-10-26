let func = (arr) => {
  let sum = 0;
  for(ele of arr){
    sum += ele;
  }
  return sum/arr.length;
}

console.log(func([2,4,5,6,7,2,34,4,]));