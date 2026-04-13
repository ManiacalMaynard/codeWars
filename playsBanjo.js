let input = document.getElementById('input');
let output = document.getElementById('primus');
let challenge = document.getElementById('challenge')
challenge.innerText = "If your name starts with the letter \"R\" or lower case \"r\", you are playing banjo!"

const areYouPlayingBanjo = (name) => {
    name[0] == 'R' || name[0] == 'r' ?
    name = name + ' plays banjo!' :
    name = name + ' does not play banjo.'
    return name
}

// Auto updates the output 
output.innerText = areYouPlayingBanjo(input.value);

input.addEventListener('input', () => {
  output.innerText = areYouPlayingBanjo(input.value);
  console.log(input.value);
});

// testing purposes, safely ignore the below
console.log(input.value);

