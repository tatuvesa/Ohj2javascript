let number = confirm("Should I calculate the square root?") && prompt("Please enter a number", "4");
document.getElementById("result").innerHTML = number < 0 ? "The square root of a negative number is not defined." : number ? "The square root of " + number + " is " + Math.sqrt(number) + "." : "Square root not calculated.";
