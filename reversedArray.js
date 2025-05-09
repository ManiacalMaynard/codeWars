// describe the challenge from CodeWars
document.getElementById('challenge').innerText = 'Given a random non-negative number, you have to return the digits of this number within an array in reverse order.'
// samples: 35231 => [1,3,2,5,3] || 0 => [0]

// the variables
let input = document.getElementById('input')
input.value = "" //clearing the input string on page load

// update the output on input change
input.oninput = function() { reverseArray() }

let outputString = document.getElementById('primus')

// the actual functionality for each challenge goes here
const reverseArray = () => {
    outputString.innerText = input.value.split("").reverse()
    console.log(outputString.innerText)
}

// testing the entire script runs because I'm a little 'stitious
console.log('Que paso, gato?')
