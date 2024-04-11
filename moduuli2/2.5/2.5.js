'use strict';
let numbers = [];
let num;
let duplicate = false;

do {
    num = parseInt(prompt("Enter a number: "), 10);
    if (numbers.includes(num)) {
        console.log("Number has already been given.");
        duplicate = true;
    } else {
        numbers.push(num);
    }
} while (!duplicate);

numbers.sort((a, b) => a - b);
console.log("Given numbers in ascending order:");
numbers.forEach(num => console.log(num));