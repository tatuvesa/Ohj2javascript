'use strict';
let numbers = [];
let num;
do {
    num = parseInt(prompt("Enter a number (0 to stop): "));
    if (num !== 0) {
        numbers.push(num);
    }
} while (num !== 0);

numbers.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
numbers.forEach(num => console.log(num));
