const number = prompt("Please enter a number", "13");
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

const result = isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`;
document.getElementById("result").innerHTML = result;
