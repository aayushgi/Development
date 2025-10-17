// console.log("hellow")
// let a= 6;
// let b= 5;
// console.log("sum is :", a+b)
 let pencil = 10;
 let pen = 5;
//  console.log("total is :", pencil+pen)
let output = `the total prize is : ${pencil+pen} rupees`;
console.log(output);
//arithmatic operators
let x = 100;
let y = 5;
let a = 5;
console.log("the value of x+y is :", x+y);
console.log("the value of x+y is :", x*y);
console.log("the value of x+y is :", x-y);
console.log("a++");
console.log("++a");
console.log("a++");
console.log("++a");

// comparison operator
// let age = 15;
// console.log(age>18)
//in js every thing have their unique unicode
'a'<'b'
//conditional statment
    //if statment
    console.log("before my if statment:");
    let age = 9;
    if( age >=18){
        console.log("eligible for voating")
    }
    if(age<18){
        console.log("you are not eligible for voating") 
    }
    console.log("after my if statment:");


    //nested if-else
        let marks=96;
    if(marks => 33){
        console.log("pass")
         if(marks>=80){
            console.log("Grade A+")
         }
         else{
            console.log("lower grade")
         }
    }
    else{
        console.log("better luck next time")
    }

    // logical operator
    // && and
    // || or
    // ! not

let marks1 = 97;
if (marks1 >=33 && marks1 >=80){
    console.log("passed")
    console.log("Grade +")
}     


//alerts and prompts
// alert(display an alert message on the page)//it is used to show the message on the screen
// prompt(it is used to take the input from the user)
alert("hello this is an alert message")
console.error("this is an error message")
console.warn("this is a warning message")


let fristName = prompt("plz enter your age")
console.log(fristName)

let fristname = prompt("plz enter your frist name")
let lastname = prompt("plz enter your last name")
console.log(fristname + " " + lastname)



//string methods
//1.trim method
let myName = "   rahul kumar   "
console.log(myName.length)
console.log(myName.trim().length)
console.log(myName.trim())
// this will be remove the extra spaces from the string
// 2.toUpperCase
let myname ="Apna college"
console.log(myname.toUpperCase())
console.log(myname.toLowerCase())
let message ="   ayush saxena"
let messa =  message.trim().toLowerCase()
let msg= "hellow";
console.log(msg.slice(0,3))
// today no update in this file due to festival
// another day without updates due to bad health 
<<<<<<< HEAD

// another reason for no updates is today attending google cloud labs

// another reason for no updates is today attending google cloud labs
// trying to update the files

=======
// another reason for no updates is today attending google cloud labs
// no upadted from the terminal branch
>>>>>>> b65ed16d699eb31ea42434517d237a15bb4c8bd9
