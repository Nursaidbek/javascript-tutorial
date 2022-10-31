'use strict';

// function sayHelloWorld() {
//     console.log("Hello World");
// };

// sayHelloWorld();

// Function with argument
// function sayHelloWorld(text) {
//     console.log(text);
// };

// sayHelloWorld("Hello World");
// sayHelloWorld("Hello Javascript");

// function calc(a, b) {
//     console.log(a + b);
// };
// calc(10, 5);
// calc(10, 9);

// function sayMyName(name, surname) {
//     console.log(`My name is ${name} ${surname}`);
// }
// sayMyName("James", "Arthur")

// Local va global variables is defined

// return
// function calc(a, b) {
//     return a + b;
//     console.log("Check"); // this code is not worked
// };
// console.log(calc(10, 5));

// function calc(a, b) {
//     return a + b;
// };
// console.log(calc(10, 5));
// const sumOfAandB = calc(10, 5);
// console.log(sumOfAandB);

// Function declaration - we can declare our function before function inventing 
// console.log(calc(10, 5));
// const sumOfAandB = calc(10, 5);
// console.log(sumOfAandB);

// function calc(a, b) {
//     return a + b;
// };

// function expression - we can declare our function after function inventing
// const logger = function() {
//     console.log("Hello World");
// }
// logger()

// Arrow function
// const calc = (a, b) => a + b;
// console.log(calc(10, 6));
// it is also true
// const addition = (a, b) => {
//     console.log(a + b);
//     return "Hello world"
// }
// console.log(addition(10, 5));

// Property metods
// lenght property is for str 
const user = "Sarvar"
console.log(user.length);
// length property is for arr
const nums = [1, 2, 3, 4, 5]
console.log(nums.length)
    // if we want to get letter from index
console.log(user[2]);

// touppercase is do all letters in upper but variable's value is not upper
console.log(user.toUpperCase());
console.log(user);

// if we want upper one we must create new variables
const upperUser = user.toUpperCase()
console.log(upperUser);

// tolowercase is do all letters in lower but variable's value is not upper
console.log(user.toLowerCase());

// if we want lower one we must create new variables
const greeting = "Hello World";
// indexOf metod is to get index of letter in parenthesis
console.log(greeting.indexOf("W"));
// slice metod is to get word in str variables from index in first letter. Index must be minus or plus
console.log(greeting.slice(5));
// substring metod is like slice but it is not worked with minus index
console.log(greeting.substring(0, 5));

// integer metods and properties
const num = 8.8
console.log(Math.round(num));
const borderWidth = "13.8px";
// console.log(parseInt(borderWidth));
console.log(parseFloat(borderWidth));