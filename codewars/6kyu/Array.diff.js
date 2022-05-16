// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  if (a.length === 0) {
    return []
  } else if (b.length === 0) {
    return a
  }
  const bSet = new Set(b)
  return a.reduce((acc,cur)=>{
    if(!bSet.has(cur)) {
      acc.push(cur)
    }
    return acc
  }, [])
}
