function isValidWalk(walk) {

  if (walk.length != 10) {return false};

  const cords = [0,0]

  for (i=0; i < walk.length; i++) {
    if (walk[i] == 'n') {cords[1]++}
    else if (walk[i] == 's') {cords[1]--}
    else if (walk[i] == 'e') {cords[0]++}
    else if (walk[i] == 'w') {cords[0]--}
  };

  console.log(cords)

  if (cords[0] == 0 && cords[1] == 0) {return true}
  
}


//I use this line to test in an HTML document, safely ignore
document.getElementById("primus").innerHTML = isValidWalk(['n','s','e','w','n','s','n','s','n','s'])


/* 

Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
Test.expect(!isValidWalk(['w']), 'should return false');
Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');



*/