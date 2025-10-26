let btn = document.querySelector('button');
let ipt = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click',()=>{
  let item = document.createElement('li');
  item.innerText = ipt.value;

  let delBtn = document.createElement('button');
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  ipt.value = "";
})

ul.addEventListener('click',(event)=>{
  if(event.target.nodeName =="BUTTON"){
    let liItem = event.target.parentElement;
    liItem.remove();
  }
})