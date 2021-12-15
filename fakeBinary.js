// codeWars kata to replace a string of numbers to a fake binary for reasons unknown

const fakeBin = (x) => {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1")
}



//I use this line to test in an HTML document, safely ignore
document.getElementById("primus").innerHTML = fakeBin('366058562030849490134388085')


