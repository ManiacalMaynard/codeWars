

function snail(arr) {
    let trail = []

    // setting coordinates
    let row = 0
    let col = 0

    for (let i=0; i<arr.length; i++) {
        trail.push(arr[0][i])
    }
    for (let k=1; k<arr.length; k++) {
        trail.push(arr[k][2])
    }
    for (let m=1; m>=0; m--) {
        trail.push(arr[2][m]).reverse
    }
    trail.push(arr[1][0])
    trail.push(arr[1][1])

    return trail

};


// below used for testing, safely ignore

document.getElementById('input').innerText = 
'snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])'

document.getElementById('primus').innerText =
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])