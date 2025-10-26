function saveToDb(data){
  return new Promise((resolve,reject)=>{
    let netSpeed = Math.ceil(Math.random()*10);
    if(netSpeed > 4){
      resolve("success : data saved");
    }else{
      reject("failure : weak connection");
    }
  });
};

saveToDb("apna college")
.then((result)=>{
  console.log("data1 saved");
  console.log(result);
  return saveToDb("hello World");
})
.then((result)=>{
  console.log("data2 saved");
  console.log(result);
  return saveToDb("Alok");
})
.then ((result)=>{
  console.log("data3: saved");
  console.log(result);
})
.catch((error)=>{
  console.log("promise was rejected");
  console.log(error);
})