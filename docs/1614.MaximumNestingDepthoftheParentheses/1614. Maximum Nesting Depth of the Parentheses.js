var maxDepth = function(s) {
  const stack = [];
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
    } else if (s[i] === ')') {
      depth = Math.max(depth, stack.length)
      stack.pop()
    }
  }

  return depth
};

console.log(`maxDepth("(1+(2*3)+((8)/4))+1")`, maxDepth("(1+(2*3)+((8)/4))+1")) // 3
console.log(`maxDepth("(1)+((2))+(((3)))")`, maxDepth("(1)+((2))+(((3)))")) // 3
console.log(`maxDepth("1+(2*3)/(2-1)")`, maxDepth("1+(2*3)/(2-1)")) // 1
console.log(`maxDepth("1")`, maxDepth("1")) // 0

