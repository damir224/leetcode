const arr = [1,2,1,3,3]

const fn = (arr) => {
  let num = arr[0]
for (let i = 1; i < arr.length; i++) {
  num = num ^ arr[i] 
01
10

11
01

10
11

01
11

10
}
return num
}

console.log(`fn(arr)`, fn(arr))
