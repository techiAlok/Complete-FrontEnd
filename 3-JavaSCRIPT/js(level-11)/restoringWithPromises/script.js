let h1 = document.createElement('h1');
h1.innerText = "Apna College";
document.body.append(h1);

function changeColor(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      h1.style.color = color;
      resolve("color changed");
    },delay);
  });
}

changeColor("red",1000)
.then(()=>{
  console.log("red color was completed");  
  return changeColor("orange",1000);
})
.then(()=>{
  console.log("orange color completed");
  return changeColor("green",1000);
})
.then(()=>{
  console.log("green color completed");
  return changeColor("blue",1000);
})
.then(()=>{
  console.log("blue color completed");
})