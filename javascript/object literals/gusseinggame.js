let max= prompt("plese enter the max number");
  const random = Math.floor(Math.random * max) +1;
  let guess = prompt("guess the number");
  while(true){
    if (guess== "quit"){
        console.log("quitting the game");
        break;
    }
    if(guess==random){
        console.log("congrats!! you gussed right");
        break;
    }
    else{
        guess= prompt("you gussed wong! plese try again")
    }
  } 