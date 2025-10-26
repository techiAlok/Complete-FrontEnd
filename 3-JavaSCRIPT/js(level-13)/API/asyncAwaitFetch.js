let url  = "https://catfact.ninja/fact";

async function getfact(){
  try{
    let res = await fetch(url);
    let data = await res.json();
    console.log("Response is : ",data.fact);
  }catch(e){
    console.log("Error : ",e);
  }

  console.log("bye");
}