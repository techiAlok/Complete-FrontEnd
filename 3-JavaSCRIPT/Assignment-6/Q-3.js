function longestCountryName(arr){
  let str ="";
  for(ele of arr){
    if(str.length < ele.length){
      str = ele;
    }
  }
  return str;
}
let arr = ["Australia","Germany","United States of America"]
let res = longestCountryName(arr);
console.log(res);