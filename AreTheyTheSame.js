
function comp(a, b){
  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
    return a.map(x => x ** 2)
    .sort()
    .every((value, index) => 
    value === b.sort()[index]) ?
    true : false;
  } else {
    return false;
  }
}