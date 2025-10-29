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


let n = prompt("Enter your number which table did you want to print");
n = parseInt(n);  // this function we basically used to convert string into the interegers
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}


// ___________________________________________________guess the favorite movie_____________________________________________
let favoriteMovie = "pk";
guessmovie = prompt("Guess my favorite movie");
while((guessmovie !==favoriteMovie)&&(guessmovie!=="quit ")){
     guessmovie=prompt("Wrong guess! Try again.");
     

}

if(guessmovie === favoriteMovie){
    console.log("Congratulations! You guessed it right.");
}
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