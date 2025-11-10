// no changes will apply today
function printpoem(){
    console.log("Roses are red, violets are blue,");
    console.log("Sugar is sweet, and so are you.");

}
printpoem();
// this is second problem we have to solve
// 2. create a function to roll a dice and return a number between 1 to 6
// math.random() used to create random number
// math.floor() used to round of number to nearest integer
function rolldice(){
 let random= Math.floor(Math.random()*6)+1;
 console.log(random);
} 
rolldice();
rolldice();
rolldice();
rolldice();     //this will write to get the output 
 
// ___________________________________________functions with arguments____________________________________________________
  function printinfo(name,age){
    console.log("Name:"+name+", Age:"+age);
 }
    printinfo("john",25);
    printinfo("alice",30);
    printinfo("bob",22);

    // _______________________________________fuction to get the average of three numbers 
    // write a function to get the avrrage pf the three numbers
    function average(num1, num2, num3){
      let avg= (num1 + num2+ num3)/3;
      console.log("average is:" , avg);
    }
    average(10,20,30);
    average(5,15,25);
    average(7,14,21);
    // __________________________________________fuction to get the table of the number__________
    function printtable(n){
      for(let i=n; i<=n*10; i+=n){
        console.log(i);
      }
    }
    printtable(5)
    // _________________________________________return statement in function_________________________
    // return keyword used to return the value from the function
    