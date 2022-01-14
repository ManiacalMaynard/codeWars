
const rot13 = (str) => {
  let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let index = x => input.indexOf(x);
  let translate = x => index(x) > -1 ? output[index(x)] : x ;
  return str.split('').map(translate).join('');
}


//I use this line to test in an HTML document, safelyignore
document.getElementById("primus").innerHTML = rot13('test')
/* 
notes:
*/