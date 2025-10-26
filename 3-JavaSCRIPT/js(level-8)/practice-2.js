let arr = [10,20000,300,40,50,82000];

console.log(arr.reduce((min,el) => {
  if(min>el){
    min=el;
  }
  return min;
}))