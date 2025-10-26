let arr = [1,2,3,4,5,6,7,8];
let sum = arr.map((el) => el*el).reduce((sum,el) => 
  {return sum+el});
console.log((sum/arr.length));