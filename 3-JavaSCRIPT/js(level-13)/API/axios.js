let btn = document.querySelector("button");
let p = document.querySelector(".result");
btn.addEventListener("click",async ()=>{
  let fac = await getfact();
  p.innerText = fac;
});

let url  = "https://catfact.ninja/fact";

async function getfact(){
  try{
    let res = await fetch(url);
    let data = await res.json();
    return data.fact;
  }catch(e){
    console.log("Error : ",e);
  }
}
