var isPowerOfTwo = function (n) {
  let i = 1;
  while (i < n) {
      i *= 2;
  }
  return i == n;
};


console.log(`isPowerOfTwo(1)`, isPowerOfTwo(1)) // true
console.log(`isPowerOfTwo(16)`, isPowerOfTwo(16)) // true
console.log(`isPowerOfTwo(3)`, isPowerOfTwo(3)) // false
console.log(`isPowerOfTwo(4)`, isPowerOfTwo(4)) // true
console.log(`isPowerOfTwo(5)`, isPowerOfTwo(5)) // false
console.log(`isPowerOfTwo(8)`, isPowerOfTwo(8)) // true
