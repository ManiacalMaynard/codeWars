console.log('Que paso, gato?')

// write a function that returns a series of strings, each of which will have a single capital letter in sequence. 
//example: "Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"
//might be fun to return to this and make it an animated thing? maybe?
let waveOutput = []
function wave(str){
    str = str.toLowerCase();
    for (i=0; i < str.length; i++) {
        let output = str.split('')
        output[i] = output[i].toUpperCase()
        waveOutput.push(output.join(''))
    }
    return waveOutput
}

  
// below used for testing, safely ignore
const input = wave('CodeWars')
document.getElementById('input').innerText = "wave('CodeWars')"
document.getElementById('primus').innerText = input