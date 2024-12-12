console.log('What are these, hands?') //on load test, ignore

// write a function that iterates through an array of strings and returns a new array of only 4-letter strings

function friend(friends){
  let results = [] //init resulting array
  //set loop for iteration
  for (let i=0; i < friends.length; i++) {
    friends[i] = friends[i].replaceAll(/[^a-zA-Z]/g, '') //removes non-letter entities
    friends[i].length == 4 ? //evaluate string length
    results.push(friends[i]) : //if true push to return array
    results //if not continue loop
  }

  return results //return resulting array
}

//below is for my testing environment, safely ignore
document.getElementById("input").innerHTML = `friend(["Ryan", "Jimm", "1234", "4", "Cool Man"])`

document.getElementById("primus").innerHTML = friend(["Ryan", "Jimm", "1234", "4", "Cool Man"])

