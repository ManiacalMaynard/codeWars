console.log('Que paso, gato?')

// describe the challenge from CodeWars
document.getElementById('challenge').innerText = 'Given a random non-negative number, you have to return the digits of this number within an array in reverse order.'
// samples: 35231 => [1,3,2,5,3] || 0 => [0]

// the input
let inputString = document.getElementById('input').innerText

// the actual functionality
const reverseArray = (n) => {
    return n.split("").reverse()
}

// a button that calls the functionality
const doIt = () => {
    reverseArray()
}

// below used for testing, safely ignore
const outputSting = reverseArray(inputString)
document.getElementById('primus').innerText = outputSting