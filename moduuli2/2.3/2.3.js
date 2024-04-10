"use strict";
let dogNames = Array.from({length: 6}, (_, i) => prompt(`Enter the name of dog ${i+1}: `));
document.getElementById('result').innerHTML = dogNames.sort().reverse().map(name => `<li>${name}</li>`).join('');
