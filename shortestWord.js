console.log('The shortest word has been pulled for you!')

// CodeWars Kata - Simple, given a string of words, return the length of the shortest word(s).

const findShort = (words) => {
  
  let array = words.split(" ")
  let shorty = array[0]
  
  for (i=0; i<array.length; i++) {
    array[i].length < shorty.length ?
    shorty = array[i] :
    shorty = shorty ;
    console.log(shorty)
  }
  
  return 'The shortest word is: ' + shorty + ' at ' + shorty.length + ' characters long.'
}


// For my html testing environment
document.getElementById("input").innerHTML = 
`findShort("bitcoin take over the world maybe who knows perhaps")`

document.getElementById("primus").innerHTML = 
findShort("bitcoin take over the world maybe who knows perhaps")