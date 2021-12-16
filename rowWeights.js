function rowWeights(array) {
  let a = 0
  let b = 0
  let newArr = []

  for ( i=0; i < array.length; i++ ) {
    i % 2 === 0 ? a += array[i] : b += array[i]
    console.log(a, b)
  }
  newArr.push(a, b)
  return newArr
}
