// function sum(a, b){
//     return a + b;
// }
// let s = sum(2, 3);
// console.log(s) 
// // craete an function to return the sum of number from 1 to n
// function getsum(n){
// let sum = 0;
// for(let i=1; i<=n; i++){
//     sum += i;
// }
// return sum; 
// }
// // create an function that return the concatenation of two string in an array
//  let str = ["hello", "world", "javascript"];
//     function concatStrings(strArray){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//     result += str[i];
//     }
//     return result;
// }
// // scope example
// // scope determine the acessibility of variable, function and object from different part of
// // 1. function scope () 
// function calsum(a, b){
// let sum = a + b;

// }
// // function variable
// const sum = function(a, b){


// }

const calculator = {

    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    },

}