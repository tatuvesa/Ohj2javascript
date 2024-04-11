'use strict'
function diceRoll() {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("Enter the number of sides of the dice: "));
const result = document.querySelector('#result');

for (;;) {
    const dice = diceRoll();
    result.innerHTML += `<li>${dice}</li>`;
    if (dice === sides) {
        break;
    }
}