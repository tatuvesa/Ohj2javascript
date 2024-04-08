const startYear = prompt("Please enter the start year", "2000");
const endYear = prompt("Please enter the end year", "2020");
let leaps = "";

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leaps += "<li>" + year + "</li>";
  }
}

document.getElementById("result").innerHTML = leaps;
