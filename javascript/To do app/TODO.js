let todo = [];
let req = prompt("Please enter your request");

while (req !== "quit") {   // ✅ runs until user types 'quit'
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
    else {
        console.log("Unknown command");
    }

    req = prompt("Please enter your request"); // ✅ ask again each loop
}

console.log("Quitting the app...");
