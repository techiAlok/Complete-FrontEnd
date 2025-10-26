let gameSeq = [];
let userSeq = [];
let btns = ["one","two","three","four"];

let started = false;  
let level = 0;
let hScore = 0;

let h3 = document.querySelector('h3');

document.addEventListener('keypress',()=>{
  if(started == false ){
    userSeq = [];
    gameSeq = [];
    level = 0;
    console.log("Game is started!");
    started = true;
    levelUp();
  }
});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)
} 

function levelUp(){
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let rdIdx = Math.floor(Math.random()*4);
  let rdColor = btns[rdIdx];
  let rdBtn = document.querySelector(`.${rdColor}`);
  gameSeq.push(rdColor);
  btnFlash(rdBtn);
}

function checkAns(indx){
  if(userSeq[indx]===gameSeq[indx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000); 
    }
  }else{
    if(level > hScore){
      hScore = level;
    }
    h3.innerHTML = `Game Over! Your score was ${level} <br> High Score is ${hScore} <br> Press any key to start.`
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },200)
    started = false;
  }
}

function btnPress(){
  let box = this;
  btnFlash(box);

  let userColor = box.getAttribute('id');
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(el of allBtns){
  el.addEventListener('click',btnPress);
}