console.log('So, s l o w')


function snail(arr) {
    let trail = []
    for (let i=0; i<arr.length; i++) {
        i % 2 == 0 ?
        arr[i].forEach( e => trail.push(e)):
        arr[i].reverse().forEach(e => trail.push(e))
    };
    console.log(trail.concat())
    return trail
};




// below used for testing, safely ignore

document.getElementById('input').innerText = 
'snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])'

document.getElementById('primus').innerText =
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])