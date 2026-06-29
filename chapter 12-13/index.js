// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.
var int1 =+prompt("Enter Integer 1: ");
var int2 =+prompt("Enter Integer 2: ");
if ( int1 > int2){
    alert("Integer 1 is larger");
}
else if (int2 > int1){
    alert("Integer 2 is Larger");
}
else if (int1 === int2){
    alert("Integer1 is equal to integer2");
}
else{
    alert("Invalid Input");
}
// . Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var userNumber = +prompt("enter a number ");
if ( userNumber > 0){
    alert("number is positive ");
}
else if (userNumber < 0){
alert("number is negative");
}
else if (userNumber === 0){
alert( "number is zero")
}
else{
alert("invalid input")
}
// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("enter a letter");
if (character === "a" ||  character === "e" || character === "i" || character === "o" || character === "u"){
alert(true);
}
else {
alert(false);
}
// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”
//  Show “Incorrect password” otherwise. Page 1 o
var password = 1234567;
var userPassword = +prompt("enter a password");
if (userPassword == password){
alert("Correct! The password you entered matches the original password");
}
else if(userPassword == 0){
alert(" Please enter your password");
}
else{
    alert("Incorrect password!");
}
// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }
var greeting;
var hour =13;
if(hour < 18){
    greeting="Good Day"
}
else{
    greeting="Good Evening"
}
// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements 
var time = number(prompt("enter your time in 24-hour format (e.g 1900)"));
if (time > 0 && time < 1200){
alert("Good Morning")
}
else if (time >= 1200 && time < 1700){
alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100){
alert("Good Evevning")
}
else if (time >= 2100 && time < 2359){
alert("Good Night")
}
else{
    alert("Invalid Time")
}


