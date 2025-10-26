let todo = [];

let req = prompt("Enter your request(list/add/delete/quit): ");

while(req != "quit"){
  if(req == "list"){
    if(todo.length == 0){
      console.log("Empty List !");
    }
    else{
    console.log("-----------------");
    let j = 1;
      for(let i = 0; i<todo.length;i++){
      console.log(`${j++}    ${todo[i]}`);
    }
    console.log("-----------------");
    } 
  }
  else if(req == "add"){
    let task = prompt("Enter the task :")
    todo.push(task.trim());
    console.log("task added");
  }
  else if(req == "delete"){
    let del = prompt("Enter seriel number to delete :")
    todo.splice(del-1,1);
    console.log("task deleted");
  }
  req = prompt("Enter your request(list/add/delete/quit): ");
}
console.log("You quit the app");