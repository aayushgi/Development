// this is an array file
let students = ["aman", "sana", "janvi", "sahil", "akash", ]
// we can add different different elements in array
let random = [1, 2, "ayush", true, null, undefined, 3.14, "hello", "world", 42]

// we can make changes in array but we can not change in string
//arrays are mutable
let animal=["dog", "cat", "elephant"]
// ____________________________________some common array methods____________________________________
//we can add elements using push method
// we can also remove elements using pop method
// if we want to add or remove elements from starting of array we can use unshift and shift method
// we are using  indexof method to find index of element
// include methhod is used to check if element is present in array or not(it will be showing true or false)
// concat method is used to merge two arrays
let colors1 = ["red", "green", "blue"]
let colors2 = ["yellow", "purple", "orange"]
let allColors = colors1.concat(colors2)
console.log(allColors) 
console.log(students)
// reverse method is used to reverse the array
console.log(students.reverse())
// we use slice method to get a portion of array
console.log(students.slice(1,4))    
// we use splice method to add or remove elements from array even we can replace the elements 
console.log(students.splice(2,2,"neha","riya")) // it will remove 2 elements from index 2 and add neha and riya from index 2
// today may be adding some lines more

// ____________________________________array methods _____________________________________
// if we craet const array then we can not reassign the array but we can change the elements of array
// no changes due to festival we adding new changes after diwali and proceeding further
// ___________________________________sort in array_____________________________________
let cars = ["bmw", "audi", "ferrari", "mercedes"]
console.log(cars.sort()) 
// if we want to sort numbers in array we have to use compare function
// ________________________array refrences____________________________________
 
// we can refer array to another variable 
// ______________________________constant array_____________________________
// when we make array as constant we can not reassign the array but we can change the elements of array
// we cant convert an array into a new array