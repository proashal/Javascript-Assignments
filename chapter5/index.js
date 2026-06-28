// Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var num1 = +prompt("Enter Num 1: ");
var num2 = Number(prompt("Enter Num 2: "));
var result = num1 + num2;
document.write("Sum Of of " + num1 + " and " + num2 + " is " + result + "<br>");
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction
var num1 = +prompt("Enter Num 1: ");
var num2 = Number(prompt("Enter Num 2: "));
var result = num1 - num2;
document.write("Sub Of " + num1 + " and " + num2 + " is " + result + "<br>");
// multiplication
var num1 = +prompt("Enter Num 1: ");
var num2 = Number(prompt("Enter Num 2: "));
var result = num1 * num2;
document.write("multiplication Of " + num1 + " and " + num2 + " is " + result + "<br>");
// division
var num1 = +prompt("Enter Num 1: ");
var num2 = Number(prompt("Enter Num 2: "));
var result = num1 / num2;
document.write("division Of " + num1 + " and " + num2 + " is " + result + "<br>");
// modulus
var num1 = +prompt("Enter Num 1: ");
var num2 = Number(prompt("Enter Num 2: "));
var result = num1 % num2;
document.write("modulus Of " + num1 + " and " + num2 + " is " + result + "<br>");
// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial  value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Valueafter addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”.
var ashal;
document.write("Value after variable declaration is: " + ashal + "<br>");
ashal = 7;
document.write("Initial Value: " + ashal + "<br>");
ashal = ++ashal;
document.write("Value after increment is: " + ashal + "<br>");
ashal = ashal+7;
document.write("Value after addition is: " + ashal + "<br>");
ashal = --ashal;
document.write("value after decremet is: " + ashal + "<br>");
ashal =ashal%3;
document.write("remainder after dividing the variable’s value by 3 is: " + ashal + "<br>");
document.write("The remainder is: " + ashal + "<br>");
// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
var ticket = 600;
var numTickect = 5;
var ticketPrice = ticket*numTickect;
document.write("total cost to buy " + numTickect +" Tickets Is " +  ticketPrice + "<br>");
// 5. Write a script to display multiplication table of any number in your browser. E.g 
var multiplicationNum = +prompt("enter table you want: ");
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
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”.
var tempC = 25;
var cToF = (tempC*9/5) + 32;
var tempF = 70;
var fToC = (tempF - 32 )*5/9;
document.write(tempC + "C is " + cToF + "F<br> ")
document.write(tempF + "F is " + fToC + "C<br> ")
// 7 Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// // Compute the total cost & show the receipt in your browser.
var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipingCharge = 100;
document.write("price of atom 1 is " + price1 + "<br>");
document.write("quantity of atom 1 is " + quantity1 + "<br>");
document.write("price of atom 2 is " + price2 + "<br>");
document.write("quantity of atom 2 is " + quantity2 + "<br>");
document.write("shipingCharge  is " + shipingCharge + "<br>");
var totalPrice = (price1*quantity1) + (price2*quantity2) + shipingCharge;
document.write("total cost of your order is " + totalPrice + "<br>");
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMark = 900;
var markObtained = 804;
var percentage = markObtained/totalMark*100;
document.write("totalmark is " + totalMark + "<br>");
document.write("markObtained is" + markObtained + "<br>");
document.write("percentage : " + percentage +"<br>");
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee  and 1 Saudi Riyal = 28 Pakistani Rupee) 
var dollars = 10;
var Saudi = 25;
var dollarToPak = 10*104.8;
var SaudiToPak = 25*28;
var totalPakRupee = dollarToPak + SaudiToPak;
document.write("Total Currence In PKR is: PKR" + totalPakRupee + "<br>");
// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression
var number = 7;
var resultOfNumber = ((number + 5) * 10) /2;
document.write("Result Is :  " + resultOfNumber + "<br>");
// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”.
var year = 2026;
var birthYear = 2010;
var possibleAge = year - birthYear;
document.write("Current Year: " + year + "<br>" );
document.write("Birth Year: "+ birthYear + "<br>");
document.write("Age: "+ possibleAge + "<br>");
// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and  output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 20;
var pie = 3.142;
var cicumference = 2*pie*radius;
var area = pie*(radius*radius);
document.write("radius of circle is:" + radius + "<br>");
document.write("circumference of circle is:" + cicumference + "<br>");
document.write("area of circle is:" + area + "<br>");
// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
var snack = "pan Cake";
var currentAge = 15;
var maximumAge = 75;
var estimatedDay = 1;
var estimatedlife = ((maximumAge-currentAge) * 365) * estimatedDay;
document.write("my favourite snack is :" + snack + "<br>");
document.write("my currentAge is :" + currentAge + "<br>");
document.write(" estimated maxium age  is :" + maximumAge + "<br>");
document.write(" amount of snack per day  is :" + estimatedDay + "<br>");
document.write("you will need: " + estimatedlife + snack + " to last you until ripe old age of " + maximumAge + "<br>");