document.querySelector("#target").innerText = Array(parseInt(prompt("Count")))
  .fill(0)
  .map((n) => Math.floor(Math.random() * 6) + 1)
  .reduce((a, b) => a + b, 0);
