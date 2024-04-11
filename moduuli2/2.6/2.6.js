'use strict'
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

const result = document.querySelector('#result');

for (;;) {
    const dice = diceRoll();
    result.innerHTML += `<li>${dice}</li>`;
    if (dice === 6) {
        break;
    }
}