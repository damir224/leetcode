const arrangeCoins = function(n) {
  let lo = 0, hi = n;
  
  while(lo <= hi){
    const mi = lo+ Math.floor((hi-lo)/2)
    const curr = (mi*(1+mi))/2
    if(curr === n) {
      return mi
    }
    
    if(curr < n) {
      lo = mi + 1
    }
    if(curr > n) {
      hi = mi - 1
    }
  }

  return lo-1
};


console.log('arrangeCoins(100)', arrangeCoins(100))
