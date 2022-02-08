

function snail(arr) {
    // let us have an empty array to fill!
    let trail = []

    while(arr.length){
        trail.push(...arr.shift())
        for (let i=0; i<arr.length; i++) {
            trail.push(arr[i].pop())
        }
        trail.push(...(arr.pop() || []).reverse())
        for (let j=arr.length-1; j>=0; j--) {
            trail.push(arr[j].shift())
        }
    }
    return trail
};


// below used for testing, safely ignore

document.getElementById('input').innerText = 
'snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])'

document.getElementById('primus').innerText =
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])