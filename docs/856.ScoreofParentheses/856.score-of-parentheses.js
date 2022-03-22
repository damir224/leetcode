/*
 * @lc app=leetcode id=856 lang=javascript
 *
 * [856] Score of Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(str) {
  const stack = []
  let res = 0
  for(let letter of str) {
    if(letter === '('){
      stack.push(res)
      res = 0
    }
    if(letter === ')'){
      res = stack.pop() + Math.max(1,res*2)
    }
  }
  return res
};
var scoreOfParentheses = function(str) {
  const stack = []
  return str.split('').reduce((acc,cur)=> {
    console.log('cur', cur)
    if(cur === '('){
      stack.push(acc)
      acc = 0
    }
    if(cur === ')'){
      acc = stack.pop() + Math.max(1, 2*acc)
    }
    console.log('stack', stack)
    return acc
  }, 0)
};
// @lc code=end

console.log('scoreOfParentheses()', scoreOfParentheses('(()(()))')) // 6
console.log('scoreOfParentheses()', scoreOfParentheses('(())()')) // 3
