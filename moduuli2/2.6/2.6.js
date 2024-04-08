/* Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters.
Write a main program that rolls the dice until the result is 6.
The main program should print out the result of each roll in an unordered list (<ul>). (2p)
*/

'use strict'
/* function dice() {
    return Math.floor(Math.random() * 6) + 1;
}

let roll = dice();
let ul = document.createElement('ul');

while (roll !== 6) {
    let li = document.createElement('li');
    li.textContent = roll;
    ul.appendChild(li);
    roll = dice();
}

let li = document.createElement('li');
li.textContent = roll;
ul.appendChild(li);

document.body.appendChild(ul);
*/

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