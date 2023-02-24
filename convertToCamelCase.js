// as is tradition, a console log to verify script loading
console.log('Well hello ;)')

// Challenge : Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Set up variables for testing
let testString = 'The-stealth_warrior'
let input = document.getElementById('input')
let output = document.getElementById('primus')


// The converter function
const convert = (str) => {
  return str.replace( /[^A-Za-z]/g, ' ') 
        .replace( /\s[a-z]/g, m => m.toUpperCase())
        .replace(/\s/g, '')
}

// Setting the DOM elements to the outcomes above
const answer = () => {
  input.innerText = testString
  output.innerText = convert(testString)
}

answer()