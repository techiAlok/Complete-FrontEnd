function randomNumber(start,end){
  let dif = end-start;
  let num = (Math.floor(Math.random()*(dif)))+start;
  return num;
}

console.log(randomNumber(5,10));