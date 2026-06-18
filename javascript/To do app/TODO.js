let todo = [];
let req = prompt("Please enter your request");

while (req !== "quit") { 
    if(req == "quit"){
        console.log("Quitting the app...");
    }  // ✅ runs until user types 'quit'
    if (req === "list") {
        console.log("**********");
        for (let task of todo) {
            console.log(task);
        }
        console.log("**********");
    } 
    else if (req === "add") {
        let task = prompt("Enter the task to be added");
        todo.push(task);
        console.log("Task added");
    } 
    

    req = prompt("Please enter your request");
}


