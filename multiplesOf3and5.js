console.log('Math... I dun like math...')

const challenge = 'CodeWars Kata - Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).'

const setUp = (text) => {
  document.getElementById('challenge').innerText = text ;
}

setUp(challenge)

function solution(number){
  
  let sum = 0
  for (i=0; i<number; i++) {
    i % 3 == 0 ||
    i % 5 == 0 ?
    sum = sum + i :
    sum = sum ;
    console.log(sum)
  }
  
  return sum
}


// For my html testing environment
document.getElementById("input").innerHTML = 
`solution(10)`

document.getElementById("primus").innerHTML = 
solution(10)