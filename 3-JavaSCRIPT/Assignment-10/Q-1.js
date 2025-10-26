let box1 = document.querySelector('#o');
let box2 = document.querySelector('#t');
let box3 = document.querySelector('#box');
let input = document.querySelector('input');

box1.addEventListener('mouseout',()=>{
  console.log("mouse is out");
})
input.addEventListener('keypress',(event)=>{
  console.log('Key pressed:', event.key);
})
box3.addEventListener('scroll',()=>{
 console.log("Box scrollTop:", box.scrollTop);
})
window.addEventListener('load',()=>{
 console.log("Screen Load");
})