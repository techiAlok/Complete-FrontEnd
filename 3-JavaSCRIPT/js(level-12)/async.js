async function col(color,delay){
  // throw "ERROR!"
  return "hello";
}

col()
 .then((result)=>{
  console.log("problem resolve!",result);
 })
 .catch((err)=>{
  console.log("error was : ",err);
 })