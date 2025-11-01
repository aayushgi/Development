let todo = [];
let req = prompt("plese enter your request");
// while(true){
//     if(req  == "quit"){
//         console.log("quiting the app");
//         break; 
//     }
    if(req =="list"){
        console.log("**********");
        for(task of todo){
            console.log(task);
        }
        console.log("**********");
    }
    else if(req == "add"){
        let task= prompt("enter the task to be added");
        todo.push(task);
        console.log("task added");
    }
     req= prompt("plese enter your request");

