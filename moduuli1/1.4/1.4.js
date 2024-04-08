'use strict';
const name = prompt("Please enter your name");
const houses = Math.floor(Math.random() * 4) + 1;
let house = "";

switch(houses) {
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
}

document.getElementById("result").innerHTML = name + ", you are a " + house + ".";
