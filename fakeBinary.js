/* 


*/

const fakeBin = (x) => {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1")
}



//I use this line to test in an HTML document, safely ignore
document.getElementById("primus").innerHTML = fakeBin('366058562030849490134388085')
// returns "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"


