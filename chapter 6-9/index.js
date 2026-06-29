// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
var A = 10
document.write("result:" + "<br>");
document.write("the value of A is :" + A + "<br>");
document.write("The value of ++a is : " + ++A + "<br>");
document.write("Now the value of a is : " + A + "<br>");
document.write("The value of a++ is: " + A++ + "<br>");
document.write("Now the value of a is: " + A + "<br>");
document.write(" The value of --a is: " + --A + "<br>");
document.write(" Now the value of a is: " + A + "<br>");
document.write(" The value of a-- is: " + A + "<br>");
document.write(" Now the value of a is: " + --A + "<br>");
// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + +v
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");
// 3. Write a program that takes input a name from user & greet the user
var username = prompt("enter your name");
alert(username + " Welcome To My Website");
// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 
//  should be displayed by default.
var multiplicationNum = +prompt("enter table you want: ");
if(multiplicationNum === 0){
    multiplicationNum=5
}
document.write("table of: " + multiplicationNum + "<br>");
document.write(multiplicationNum  + " * 1 = " + multiplicationNum*1 + "<br>");
document.write(multiplicationNum  + " * 2 = " + multiplicationNum*2 + "<br>");
document.write(multiplicationNum  + " * 3 = " + multiplicationNum*3 + "<br>");
document.write(multiplicationNum  + " * 4 = " + multiplicationNum*4 + "<br>");
document.write(multiplicationNum  + " * 5 = " + multiplicationNum*5 + "<br>");
document.write(multiplicationNum  + " * 6 = " + multiplicationNum*6 + "<br>");
document.write(multiplicationNum  + " * 7 = " + multiplicationNum*7 + "<br>");
document.write(multiplicationNum  + " * 8 = " + multiplicationNum*8 + "<br>");
document.write(multiplicationNum  + " * 9 = " + multiplicationNum*9 + "<br>");
document.write(multiplicationNum  + " * 10 = " + multiplicationNum*10 + "<br>");
// 6. Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.
var subject1 = prompt("enter your first ssubject ");
var subject2 = prompt("enter your second subject");
var subject3 = prompt("enter your third subject");
var eachmarks = 100;
var marks1 = +prompt("enter your first subject marks");
var marks2 = +prompt("enter your second subject mark");
var marks3 = +prompt("enter your third subject mark");
var totalMarks = eachmarks*3;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = obtainedMarks/totalMarks*100
document.write(subject1 + marks1 + "/" + eachmarks + "<br>");
document.write(subject2 + marks2 + "/" + eachmarks + "<br>");
document.write(subject3 + marks3 + "/" + eachmarks + "<br>");
document.write("obtained marks" + obtainedMarks +  "/"  + totalMarks +"<br>");
document.write("percentage" + percentage +  "%"  + "<br>");