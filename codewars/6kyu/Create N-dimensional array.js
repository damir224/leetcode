const recursion = (n, size, arr) => {
  const arr1 = new Array(size).fill(arr)
  
  if(n === 1) {
    return arr1;
  }

  return recursion(n-1, size, arr1)
}

const createNDimensionalArray = (n, size ) => {
  const word = `level ${n}`
  const newArr = new Array(size).fill(word)
  
  if (n === 1) {
    return newArr
  }
  
  return recursion(n-1, size, newArr)
}
