// Defines the challenge
let challengeText = document.getElementById('challenge')

challengeText.innerText = "Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present."

//input var set up
let input = document.getElementById('input')
let inputStr = input.value

//output var set up
let output = document.getElementById('primus')


//main function(s)
function wordSpinner(str) {
    let outputString = ''
    for(i=str.length; i>0; i--) {
        let letter = 'L'
        outputString = outputString + letter
    }
    output.innerText = outputString
}

// finalOutput = wordSpinner(input.value)

//outcomes
setInterval(wordSpinner(inputStr), 2000)



// Testing that all functions complete
console.log('Pattern complete, Goose')