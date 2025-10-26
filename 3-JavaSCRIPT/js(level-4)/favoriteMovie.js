let favoriteMovie = "Jangal Me Mangal";

let guess = prompt("Guess the favorite Movies");

while(guess != favoriteMovie){
  if(guess === "Quit"){
    break;
  }
  console.log("");
  guess = prompt("Try Again to guess the favorite Movies");
}

console.log("You Guessed Right !");
