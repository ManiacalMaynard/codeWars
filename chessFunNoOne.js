//Looks messy but works. Wanted to work out a better function within the cell color but... Next time!

const chessBoardCellColor = (a, b) => {
  return ((a.charCodeAt(0) - 64) + Number(a[1]))%2 ===
  ((b.charCodeAt(0) - 64) + Number(b[1]))%2;
}
