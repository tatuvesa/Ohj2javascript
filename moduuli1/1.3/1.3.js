"use strict";
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let num3 = parseInt(prompt("Enter the third number: "));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.getElementById("sum").innerHTML = `The sum is: ${sum}`;
document.getElementById("product").innerHTML = `The product is: ${product}`;
document.getElementById("average").innerHTML = `The average is: ${average.toFixed(2)}`;
