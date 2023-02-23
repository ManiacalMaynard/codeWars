console.log('The spice is the worm. The worm is the spice!')

// let's set up the DOM variables!
let input = document.getElementById('input')
let result = document.getElementById('primus')
let testy = [78,587,232,409,228]

// set display text explaining the challenge, nice and easy today!
const setChallengeText = (text) => {
  document.getElementById('challenge').innerText = text
}

setChallengeText('Given an array of integers your solution should find the smallest integer.')

// okay, spread opperator returns lowest number in the input array
const compare = (arr) => {
  return Math.min(...arr)
}

// and set the values to their DOM elements
const doit = () => {
  input.innerText = testy
  primus.innerText = compare(testy)
}

doit() // run it!
