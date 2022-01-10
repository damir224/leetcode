var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  num = 0;
  while (x > num) {
    num = num * 10 + (x % 10);
    x = parseInt(x/10);
  }
  return x === num || x === parseInt(num/10);
};

// console.log(`isPalindrome(1221)`, isPalindrome(1221)) // true
// console.log(`isPalindrome(123)`, isPalindrome(123)) // false
// console.log(`isPalindrome(121)`, isPalindrome(121)); // true
// console.log(`isPalindrome(-121)`, isPalindrome(-121)) // false
// console.log(`isPalindrome(10)`, isPalindrome(10)) // false
// console.log(`isPalindrome(1)`, isPalindrome(1)) // true
console.log(`isPalindrome(21120)`, isPalindrome(21120)); // false
