// in this page we will learn about the obbject literals in the javascript
let student = {
    name: "ayush saxena",
    age: 22,
    gender: "male"
}
const product ={
    product_name: "laptop",
    serial_number: 12345,
    price: 45000, 
}
// __________________________________________thread/twitwer post (creat an object leteral twiter post which include the folowing property)____
 let twitter_post = {
    username: "ayush_saxena",
    content: "Learning javascript is fun!",
    likes: 150,
    repost: 20,
    tags: ["javascript", "coding", "webdev"]
 };

 //  ____________________________________________get values__________________________________________
 twitter_post.content; // "Learning javascript is fun!"
 twitter_post.likes; // 150
//  js automatic convert the key into string if we provoid the key without quotes
// _____________________________________________add values/ update values in object literals_______________
let alphabet = {
    frist: "a",
    second: "b",
    third: "c"
}
alphabet.fourth = "d"; // add new key value pair
alphabet.second = "beta"; // update the value of existing key
// _____________________________________________nested objects literals_______________________
const classinfo ={
    aman: {
        age: 23,
        gender: "male",
        grade: "A",
    },
    pryia: {
        age: 20,
        gender: "female",
        grade: "a+",
    },
    riya: {
        age: 22,
        gender: "female",
        grade: "c",
    }
}
// _____________________________________________array of objects literals____________________________
const studentinfoarray = [
    {
        name: "amir",
        age: 22,
        gender: "male"
    },
    {
        
        name: "kajal",
        age: 25,
        gender: "transgender"
    },
    {
        
        name: "riya",
        age: 17,
        gender: "female"
    }
];
//  _______________________________math object___________________________
  Math.floor(5.999)
//   ____________________________random integers_______________________________
let num= Math.random;
num= num*10;
num= Math.floor(Math.random*10);