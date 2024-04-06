/*
Write a program that asks the user to enter a year 
and notifies the user whether the input year is a leap year. 
A year is a leap year if it is divisible by four. 
However, years divisible by 100 are leap years only if they are also divisible by 400. 
Print the result on the HTML document. (3p)
*/

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

const result = isLeap ? `${year} is a leap year.` : `${year} is not a leap year.`;
document.getElementById("result").innerHTML = result;
