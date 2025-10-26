let para1 = document.createElement('p');
para1.innerText = "Hey!, I'm red.";
para1.style.color = "red";
document.querySelector('body').append(para1);
let h = document.createElement('h3');
h.innerText = "I'm blue h3.";
h.style.color = "blue";
document.querySelector('body').append(h);

let di = document.createElement("div");
di.style.border = "2px solid black";
di.style.backgroundColor = "pink";
document.querySelector('body').append(di);
let h1 = document.createElement("h1");
h1.innerText = "I'm in div.";
document.querySelector('div').appendChild(h1);
let p = document.createElement('p');
p.innerText = "ME TOO";
document.querySelector('div').appendChild(p);