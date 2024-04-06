'use strict';
const name = prompt("Please enter your name");
const house = Math.floor(Math.random() * 4) + 1;
let houses = "";

switch(house) {
  case 1:
    houses = "Gryffindor";
    break;
  case 2:
    houses = "Slytherin";
    break;
  case 3:
    houses = "Hufflepuff";
    break;
  case 4:
    houses = "Ravenclaw";
    break;
}

document.getElementById("result").innerHTML = name + ", you are a " + houses + ".";
