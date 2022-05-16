// https://www.codewars.com/kata/55a4f1f67157d8cbe200007b/train/javascript

const dfs = (image, r, c) => {
  const rl = image.length - 1
  const cl = image[0].length - 1
  if(rl < r || r < 0 || cl < c || c < 0 || image[r][c] === null || image[r][c] === 0 ) {
    return 0
  }
  image[r][c] = null
  dfs(image, r, c + 1)
  dfs(image, r + 1, c + 1)
  dfs(image, r + 1, c)
  dfs(image, r + 1, c - 1)
  dfs(image, r, c - 1)
  dfs(image, r - 1, c - 1)
  dfs(image, r - 1, c)
  dfs(image, r - 1, c + 1)
  return 1
}
function countIslands(image){
  let count = 0
  for(let r = 0; r < image.length; r ++) {
    for(let c = 0; c < image.length; c ++) {
      if(image[r][c] === 1) {
        count += dfs(image, r, c, count)
      }
    }
  }
  return count
}
