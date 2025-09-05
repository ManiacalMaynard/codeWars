let input = document.getElementById('input');
let output = document.getElementById('primus');

function isEven(num) {
  return num % 2 == 0 ? 'true' : 'false' ;
}

input.addEventListener('input', () => {
  output.innerText = isEven(input.value);
  console.log(input.value);
});

// testing purposes, safely ignore the below
console.log(input.value);