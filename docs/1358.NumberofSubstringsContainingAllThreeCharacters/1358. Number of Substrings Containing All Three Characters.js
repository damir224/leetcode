const numberOfSubstrings = function(s) {
  let count = 0, windowStart = 0, sum=0, multiplier=0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    count += s[windowEnd].charCodeAt()
    if(windowEnd-windowStart === 2) {
      if(count === 294) {
        sum++
      }
      sum = sum + multiplier++
      count -= s[windowStart].charCodeAt()
      windowStart++
    }
  }

  return sum
};


// console.log('numberOfSubstrings("abcabc")', numberOfSubstrings("abcabc")) // 10
console.log('numberOfSubstrings("aaacb")', numberOfSubstrings("aaacb")) // 3
// console.log('numberOfSubstrings("abc")', numberOfSubstrings("abc")) // 1
// console.log('large', numberOfSubstrings(""))
