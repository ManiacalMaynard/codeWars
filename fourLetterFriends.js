console.log('What are these, hands?')

// write a function that iterates through an array of strings and returns a new array of only 4-letter strings

function friend(friends){
  //verify string / count length / if 4 push / if not moveon
  let results = []

  for (let i=0; i < friends.length; i++) {

    if (
    friends[i].includes(`/[a-zA-Z]/gm`) &&
    friends[i].length == 4 ) {
    results.push(friends[i])
    }
  }
  
  return friends[0]
  console.log(results)
}

//I use this line to test in an HTML document, safely ignore
document.getElementById("input").innerHTML = 
`friend(["Ryan", "Jimmy", "1234", "4", "Cool Man"])`

document.getElementById("primus").innerHTML = 
friend(["Ryan", "Jimm", "1234", "4", "Cool Man"])

