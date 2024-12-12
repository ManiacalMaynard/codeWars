// complete the function
const number = (arr) => {
  let people = 0
  let counter = 0
  for (i=0; i<arr.length; i++) {
    counter = arr[i][0] - arr[i][1]
    people = counter + people
    console.log(people)
    }
    return people
  }



//I use this line to test in an HTML document, safely ignore
document.getElementById("primus").innerHTML = 
number([[10,0],[3,5],[5,8]])
