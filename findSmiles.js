// describe the challenge from CodeWars
document.getElementById('challenge').innerText = 'Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.'
// samples: 35231 => [1,3,2,5,3] || 0 => [0]

// the variables
let input = document.getElementById('input')
input.value = //clearing the input string on page load
testValue  = [':)', ':0', ':)', ':)'] 
// update the output on input change
input.oninput = function() { findSmiles(input.value) }

let outputString = document.getElementById('primus')
let count = 0

// the actual functionality for each challenge goes here
const findSmiles = (arr) => {
    arr.forEach( (element) => {
        element == ':)' ? count++ : count;
    outputString.innerText = count
    }); 
    };
findSmiles(testValue)

// testing the entire script runs because I'm a little 'stitious
console.log('Why so serious?')
