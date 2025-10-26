function uniqueElement(str){
  let ans ="";
  for(char of str){
    if(!(ans.includes(char)))
    {
      ans += char;
    }
  }
  return ans;
}
str = "abcdabcdefgggh";
let res = uniqueElement(str)
console.log(res);