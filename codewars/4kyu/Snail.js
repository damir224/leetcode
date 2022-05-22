const dfs = (array, r, c, resultArr, isEnd) => {
  if(
    r < 0 ||
    r > array.length-1 ||
    c < 0 ||
    c > array[r].length-1 ||
    array[r][c] === null
  ) {
    return;
  }
  
  resultArr.push(array[r][c])
  array[r][c] = null
  
  if (isEnd) dfs(array, r - 1, c, resultArr, true);
  
  dfs(array, r, c+1, resultArr, false)
  dfs(array, r+1, c, resultArr, false)
  dfs(array, r, c-1, resultArr, false)
  dfs(array, r-1, c, resultArr, true)
  return resultArr
}
snail = function(array) {
  console.log('array', array)
  if (!array.length || !array[0].length){
    return []
  }
  const resultArr = []
  dfs(array, 0,0,resultArr)
  return resultArr
}
