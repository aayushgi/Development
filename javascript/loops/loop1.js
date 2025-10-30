console.log("1");
console.log("2");
console.log("3");
// no changes will be applied to this file
// no changes
// trying to add some changes here
// no changes yet again
// ___________________________________________28/10/2025_______________________________________
// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// 5rakg7af
// ______________________________________________print all odd number are lies between 1 to 100____________________________________

for(let i=1; i<=50; i=i+2){
    console.log(i);
}

// _________________________________________________print all even number are lies between 2 to 100____________________________________
for(let i=2;  i<=50; i=i+2){
    console.log(i);
}


// let n = prompt("Enter your number which table did you want to print");
// n = parseInt(n);  // this function we basically used to convert string into the interegers
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }


// ___________________________________________________guess the favorite movie_____________________________________________
// let favoriteMovie = "pk";
// guessmovie = prompt("Guess my favorite movie");
// while((guessmovie !==favoriteMovie)&&(guessmovie!=="quit ")){
//      guessmovie=prompt("Wrong guess! Try again.");
     

// }

// if(guessmovie === favoriteMovie){
//     console.log("Congratulations! You guessed it right.");
// }
// ______________________________________________________break keyword ______________________________________________________
// we are using the break keyword to exit the loop when a certain condition is met
let i=1;
while(i<=10){
    if(i===6){
        break;
    }
    console.log(i);
    i++;

    
}
// _____________________________________________________loops with arrays_______________________________________________________
let fruits = ["apple", "banana", "mango", "grapes", "orange"];
fruits.push("pineapple")
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

// _______________________________________________nested loops with nested arrays_______________________________________________________
let animals=[
    ["cat", "dog", "cow"],
    ["lion", "elephant", "tiger"]
]
for(let i=0; i<animals.length; i++){
    console.log(i, animals[i]);
    for(let j=0; j<animals[i].length; j++){
        console.log("   ", j, animals[i][j]);
    }
}


// __-_________________________________________________________for...of loop___________________________________________________________
// this loop we are using when we have to acces the items of collections
// this loop will not run on internet explorer brouser 
let colors = ["red", "green", "blue", "yellow"];
for(let color of colors){
    console.log(color);
}

let heroes = [["superman", "batman", "spiderman"] , ["ironman" , "thor", "hulk"]]
for(list of heroes){
    console.log(List);
}