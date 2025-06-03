// describe the challenge from CodeWars
document.getElementById('challenge').innerText = 'passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.'
// samples: 35231 => [1,3,2,5,3] || 0 => [0]

// the variables
let input = document.getElementById('input').value
// input.value = [255, 0, 0] 

// update the output on input change
input.oninput = function() { rgbToHex(input.value) }

let outputString = document.getElementById('primus')

// the actual functionality for each challenge goes here
function rgbToHex () {
    outputString.innerText = r + g + b
}

// testing the entire script runs because I'm a little 'stitious
console.log(input)
