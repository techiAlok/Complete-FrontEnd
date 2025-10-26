let input = document.createElement('input');
let h2 = document.createElement('h2');
input.setAttribute('id','task');
input.setAttribute('placeholder','enter your name');

document.body.insertBefore(input, document.body.firstChild);
document.body.insertBefore(h2, document.body.firstChild.nextSibling);
let al = /[^a-zA-Z ]/g;
input.addEventListener('input',()=>{
  let filteredValue = input.value.replace(al, '');
  h2.innerText = filteredValue;
})