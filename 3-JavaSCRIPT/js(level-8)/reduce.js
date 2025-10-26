let arr = [1,2,3,4,5,6,7,8];

let ans = arr.reduce((res,el) => {
  console.log(res);
  console.log(el);
  return (res+el);
});
console.log("------------------------------");
console.log(ans);