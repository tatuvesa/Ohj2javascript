'use strict';
const year = parseInt(prompt("Submit a year: "));
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
document.getElementById("result").innerHTML = `${year} is ${isLeap ? "" : "not "}a leap year.`;
