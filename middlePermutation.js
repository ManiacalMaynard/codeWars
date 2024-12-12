// as is tradition, a console log to verify script loading
console.log('Taco Cat spelled backward is Taco Cat!')

document.getElementById('challenge').innerText = 'You are given a string s. Every letter in s appears once. Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)'

// Set up variables for testing
let testString = 'abc'
let input = document.getElementById('input')
let output = document.getElementById('primus')


// The function:

function middlePermutation(s) {
  // First create mainStrings from input, each starting with a different first letter in original order. Ex: "abc", "bca", "cab", "acb", "bac", "cba"
  let mainArray = []
  for ( i=0; i < s.length; i++ ) {
    x = s.split('')
    x.shift()
    x.unshift(s[i])

    mainArray.push( x )
  }

  return mainArray

  // Second iterate each mainString keeping the inital letter in place and swapping the rest of the letters adding each mutation to the output array until a repeat has occured, break to new mainString

}

// Setting the DOM elements to the outcomes above
const answer = () => {
  input.innerText = testString
  output.innerText = middlePermutation(testString)
}

answer()