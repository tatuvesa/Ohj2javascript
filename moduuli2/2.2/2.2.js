'use strict';
let numParticipants = parseInt(prompt("Enter the number of participants: "));
let participantNames = [];

for (let i = 0; i < numParticipants; i++) {
  let name = prompt(`Enter the name of participant ${i+1}: `);
  participantNames.push(name);
}

participantNames.sort();
document.getElementById("result").innerHTML = participantNames.map(name => `<li>${name}</li>`).join('');
