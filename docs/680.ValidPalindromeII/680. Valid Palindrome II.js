const validPalindrome = function (s) {
  // doesn'twork, cause it needs check both solution
  let min = 0,
    max = s.length - 1,
    count = 1;
  while (min <= max) {
    console.log('s[min], s[max]', s[min], s[max])
    if (s[min] !== s[max]) {
      if (count) {
        count--;
      } else {
        return false;
      }

      if(s[min] === s[max-1]) {
        // max--
      } else if (s[min+1] === s[max]) {
        // min++
      } else {
        return false
      }
    }
    min++;
    max--;
  }
  return true;
}
// ebcbbececabbacecbbcbe
//  bcbbececabbacecbbcb
//   cbbececabbacecbbc
//    bbececabbacecbb
//     bececabbacecb
    //  ececabbacec
    //   cecabbace
    //    ecabbac
    //     cabba
    //      abb
    //       b
     ececabbacec
       ecabbace
        cabbac 
         abba 
          bb 
      cecabbace
       ecabbac
        cabba
         abb
          b
console.log('validPalindrome', validPalindrome('ebcbbececabbacecbbcbe')); // true
// console.log('validPalindrome', validPalindrome('aba')); // true
// console.log('validPalindrome', validPalindrome('abca')); // true
// console.log('validPalindrome', validPalindrome('abc')); // false
// console.log('validPalindrome', validPalindrome('deeee')); // true
// console.log('validPalindrome', validPalindrome('eedede')); // true
