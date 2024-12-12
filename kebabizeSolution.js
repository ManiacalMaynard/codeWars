const kebabize = (str) => {
  return str.replace(/[^A-Za-z]/g, '').replace(/[A-Z]/g, '-' + `$&` ).toLowerCase()
}



//I use this line to test in an HTML document, safely ignore
const input = kebabize('myCamelHas3Humps')
document.getElementById('input').innerText = input()
document.getElementById('primus').innerText = input
// returns "my-camel-has-humps"


/*
    Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
    Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');


*/
