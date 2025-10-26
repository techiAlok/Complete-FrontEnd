let btn = document.querySelector("button");
let im = document.querySelector("img");

btn.addEventListener("click",async ()=>{
  let re = await getImg();
  im.src = re;
})

let url = "https:/dog.ceo/api/breeds/image/random";

async function getImg() {
  try{
    let d = await axios.get(url);
    return d.data.message;
  }catch(e){
    console.log("Error : ",e);
  }
}