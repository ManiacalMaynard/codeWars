// Defines the challenge
let challengeText = document.getElementById('challenge')

challengeText.innerText = "Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise. The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters."

//grabbing the html object IDs
let input = document.getElementById('input')
let button = document.getElementById('button')
let output = document.getElementById('primus')

//main function(s)
const doIt = () => {
    output.innerText = /(.).*\1/.test(input.value)
}

//outcomes
// setInterval(doIt, 2000)
// button.addEventListener("click", doIt(inputStr))

// Testing that all functions complete
console.log('Pattern complete, Goose')