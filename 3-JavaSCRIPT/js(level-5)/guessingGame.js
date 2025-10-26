let num  = prompt("Enter a range");

let random = Math.ceil(Math.random()*num);

let guess = prompt(`Guess from 1 to ${num}`);

while(true){
  if(guess == "quit"){
    console.log("You Quit!");
    break;
  }
  if(parseInt(guess) === random) {
    alert("YAY!! You Won.");
    console.log("YAY!! You Won.");
    break;
  }else{
    if(parseInt(guess) < random){
      guess = prompt("Try some large number! Guess Again or type 'quit' to exit:");
      console.log("Try some large number!");
    }
    if(parseInt(guess) > random){
      guess = prompt("Try some small number! Guess Again or type 'quit' to exit:");
      console.log("Try some small number!");
    }
  }
}
