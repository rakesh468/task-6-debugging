// // // // Find the culprit and invoke the alert//
 window.alert("I’m invoked!");
 
// // // //  Fix the below to alert Guvi geek//
fname = "Guvi";
lname = "geek";
admin = fname+lname;
alert( admin );

// // // // Fix the below to alert hello Guvi geek//
fname = "Guvi";
lname = "geek"
let fullname = fname+lname;
alert( "hello"+`${fullname}` );

// // // // Fix the below to alert sum of two numbers//
let a = prompt("First number?");
let b = prompt("Second number?");
window.alert(a + b)

// // // If you run the below scritpt you will get “Code is Blasted”
// // // Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

var c = "2"< "12";
// // // Don't touch below this
if (c) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
// // // In the above code c="2" implies a string count (ie)  "12" is greater than "2"  so it console log ("diffused") (else)condition

// // // How to get the success in console.//
let x = prompt("Enter the number?")
// //Don't modify any code below this
if (x) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
// // // In the above code if number is not specified in the prompt popup it calls the else condition and displays success in the console//

// // // How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value !== 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// // // Fix the code to welcome the Employee//
let login = "Employee";
 let message = `${login+" and directors"} Greetings`;
let message=`welcome all the ${login} and director `
console.log(message);

// // // Fix the code to welcome the boss
let message1;
let lock = 0;
// // //Dont change any code below this 
if (null || lock || undefined )
{
  message1 = "Go away";
}
else
{
 message1 = "welcome";
}
  console.log(message1);


// // //  Fix the code to welcome the boss//
  let message2;
 let lock1 = 0;
// // //Dont change any code below this
if (lock1 && " " || undefined )
{
  message2 = "Go away";
}
else
{
 message2 = "welcome";
}
console.log(message2);

// // // Change the code to print
// // // 3
// // // 2
// // // 1
let i = 4;
while (i>1) {
  console.log( --i );
}

// // // Change the code to print all the gifts//
let gifts = ["teddy bear", "drone", "doll"];
console.log(`Wrapped ${gifts} and added a bow!`);

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);

