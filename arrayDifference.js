// Simple solution to filtering the differences from one array to the next
// A CodeWars kata "Array.diff".

function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item));
}