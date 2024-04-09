const numDice = prompt("Amount of dice");
const sumGoal = prompt("Sum goal");
let successfulRolls = 0;
const totalRolls = 10000;

for (let i = 0; i < totalRolls; i++) {
  let sum = 0;
  for (let j = 0; j < numDice; j++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  if (sum == sumGoal) {
    successfulRolls++;
  }
}

const probability = (successfulRolls / totalRolls * 100).toFixed(2);
document.getElementById("result").innerHTML = `Probability to get sum ${sumGoal} with ${numDice} dice is ${probability}%`;
