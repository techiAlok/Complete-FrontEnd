let h1 = document.createElement('h1');
h1.innerText = "Apna College";
document.body.append(h1);

function col(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      h1.style.color = color;
      console.log(`color changed ${color}`);
      resolve("Problem resolved");
    },delay);
  });
}

async function demo() {
  await col("red",1000);
  await col("orange",1000);
  await col("yellow",1000);
  col("blue",1000);
}