let input = document.getElementById('input');
let output = document.getElementById('primus');

function persistence(num) {
  // need a fail state for null / undefined
  return num;
}

input.addEventListener('input', () => {
  output.innerText = persistence(input.value);
  console.log(input.value);
});

// testing purposes, safely ignore the below
console.log(input.value);
