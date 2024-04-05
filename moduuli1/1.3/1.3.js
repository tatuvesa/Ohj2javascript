'use strict';
const num1 = parseFloat(prompt('First number:  '));
const num2 = parseFloat(prompt('Second number: '));
const num3 = parseFloat(prompt('Third number: '));

const sum = num1 + num2 + num3;
const times = num1 * num2 * num3;
const avg = (num1 + num2 + num3)/3;

console.log('Summa on ' + sum +
            ', kerto on ' + times +
            ', keskiarvo on ' + avg);
