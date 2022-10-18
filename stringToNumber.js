console.log('I am a beefy tee')

const stringToNumber = (str) => {
    return Number.parseInt(str);
}

//I use this line to test in an HTML document, safely ignore
document.getElementById("primus").innerHTML = 
stringToNumber("-7")

/*    Test.assertEquals(stringToNumber("1234"),1234)
Test.assertEquals(stringToNumber("605"), 605)
Test.assertEquals(stringToNumber("1405"),1405)
Test.assertEquals(stringToNumber("-7"),  -7)
*/