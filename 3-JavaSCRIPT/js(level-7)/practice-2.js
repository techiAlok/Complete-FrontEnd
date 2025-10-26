let count = 1;

let id = setInterval(()=>{
      console.log("Hello World");
      count++
      if(count>5){
        clearInterval(id);
      }
      },2000);