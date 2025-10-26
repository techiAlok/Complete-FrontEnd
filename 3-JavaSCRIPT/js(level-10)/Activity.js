let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click",evnt);

function evnt(){
  h1.innerText = generateRandomColor();
  div.style.backgroundColor = generateRandomColor();
}

function generateRandomColor() {
  let r = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}