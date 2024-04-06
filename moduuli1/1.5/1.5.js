'use strict';
const year = parseInt(prompt('Submit a year: '));
let isLeap = false;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        isLeap = true;
      }
    } else {
      isLeap = true;
    }
  }

let result;
if (isLeap) {
  result = year + " is a leap year.";
} else {
  result = year + " is not a leap year.";
}

document.getElementById("result").innerHTML = result;
