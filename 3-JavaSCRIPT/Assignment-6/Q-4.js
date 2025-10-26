function countVowel(str){
  const ref = "aeiou";
  str = str.toLowerCase();
  let count = 0;
  for(let i=0; i<str.length; i++){
    for(let j=0; j<ref.length; j++){
      if(str[i]==ref[j]){
        count++;
      }
    }
  }
  return count;
}

let arr = "Australia";
let res = countVowel(arr);
console.log(res);