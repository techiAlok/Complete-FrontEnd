let arr = [2,3,67,23,56,7,625,78,22,6,87,7,434,5,5,2,34,435];

let max = 0;

let ans = arr.reduce((max,el) => {
  if(max<el){
    max=el;
  }
  return max;
})

console.log(ans);