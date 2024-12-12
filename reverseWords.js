// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
let output = document.getElementById('primus');
let input = document.getElementById('input').innerText;

function reverseWords(string) {
  let array = string.split(' ');
  let newString = [];
  for (i = array.length; i > 0; i--) {
    newString.push(array[i]);
  }
  output.innerText = newString.join(' ');
}

document
  .getElementById('input')
  .addEventListener('change', reverseWords(input));

// testing purposes, safely ignore the below
console.log('world hello!');
