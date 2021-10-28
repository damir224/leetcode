var countConsistentStrings = function(allowed, words) {
  const dict = {}
  allowed.split('').forEach(e=>dict[e.charCodeAt(0).toString(2)]=e)
  console.log(`dict`, dict)
  return words.map(e=>e.split('').)
  return allowed.charCodeAt(0).toString(2)
};

console.log(`countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])`, countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])) // 2
// console.log(`countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])`, countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])) // 7
// console.log(`countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])`, countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])) // 4
