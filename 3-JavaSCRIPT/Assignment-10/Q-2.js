let btn = document.createElement('button');
btn.innerText = "click me";

document.body.append(btn);
btn.addEventListener('click',()=>{
  btn.style.backgroundColor = 'green';
})