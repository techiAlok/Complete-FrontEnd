let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",async ()=>{
  let ans = await sear(inp.value);
  console.log(ans);

  ul.innerHTML = "";

  ans.forEach(university => {
  let li = document.createElement('li');
  li.innerText = university.name;
  ul.appendChild(li);
});
});

let url = "http://universities.hipolabs.com/search?name=India&state-province=";

async function sear(country) {
  try{
    let re = await axios.get(url+country);
    return re.data;
  }catch(e){
    console.log("Error : ",e);
  }
}