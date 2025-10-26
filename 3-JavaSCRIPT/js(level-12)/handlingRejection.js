let h1 = document.createElement('h1');
h1.innerText = "Apna College";
document.body.append(h1);

function col(color,delay){
  return new Promise((resolve,reject)=>{
    let num = Math.ceil(Math.random()*10);
    if(num < 5){
      reject("issue occured");
    }
    setTimeout(()=>{
      h1.style.color = color;
      console.log(`change color to ${color}`);
      resolve("problem resolve");
    },delay);
  });
}

async function hR() {
  try{
    await col("red",1000);
    await col("orange",1000);
    await col("yellow",1000);
    col("blue",1000);
  }catch(err){
    console.log("error caught")
    console.log(err)
  }

  let a = 5;
  console.log(a);
  console.log("new number :",a);
}