let btn = document.createElement("button");
let inpt = document.createElement("input");
btn.innerText = "Click me";
inpt.setAttribute('type','text');
inpt.setAttribute('placeholder',"Enter your name ");

document.body.appendChild(inpt);
document.body.appendChild(btn);