console.log('I am a beefy tee')

const stringToNumber = (str) => {
    return Number.parseInt(str);
}

let thing = 1405

//I use this line to test in an HTML document, safely ignore
document.getElementById("input").innerHTML = 
typeof(thing)

document.getElementById("primus").innerHTML = 
stringToNumber(thing)

/*
Test.assertEquals(stringToNumber("1234"),1234)
Test.assertEquals(stringToNumber("605"), 605)
Test.assertEquals(stringToNumber("1405"),1405)
Test.assertEquals(stringToNumber("-7"),  -7)
*/
