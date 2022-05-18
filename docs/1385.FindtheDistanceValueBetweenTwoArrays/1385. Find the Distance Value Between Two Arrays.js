const biSearch = (arr, leftT, rightT) => {
  let lo = 0, hi = arr.length-1;
  while(lo <= hi) {
    const mi = Math.floor((hi+lo)/2)
    if(arr[mi] >= leftT && arr[mi]<=rightT){
      return false
    }
    if (arr[mi] > rightT) {
      hi = mi-1
    }
    
    if (arr[mi] < leftT) {
      lo = mi+1
    }
    
  }
  return true
}
const findTheDistanceValue = function(arr1, arr2, d) {
  arr2.sort((a,b)=>a-b)
  let count = 0
  for(let i = 0; i < arr1.length; i++) {
    if(biSearch(arr2, arr1[i]-d, arr1[i]+d)){
      count++
    }
  }
  return count
};

// console.log('findTheDistanceValue([4,5,8], [10,9,1,8], 2)', findTheDistanceValue([4,5,8], [10,9,1,8], 2)) // 2

console.log('2', findTheDistanceValue([4,-3,-7,0,-10], [10], 69)) // 0
