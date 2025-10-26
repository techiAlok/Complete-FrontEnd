function saveToDb(data,success,failure){
  let internetSpeed = Math.ceil(Math.random()*10);
  if(internetSpeed > 4) success();
  else failure();
}

saveToDb("apna college",()=>{
  console.log('succes1 : data1 saved ');
  saveToDb("hello",()=>{
    console.log('success2 : data2 saved ');
    saveToDb("World",()=>{
      console.log('succes3 : data3 saved ');
      saveToDb("Hi",()=>{
      console.log('succes4 : data4 saved ');
    },()=>{
  console.log("falure4 : data4 fails");
  })
  },()=>{
  console.log("falure3 : data3 fails");
  })
  },()=>{
  console.log("falure2 : data2 fails");
})
},()=>{
  console.log("falure1 : data1 fails");
})