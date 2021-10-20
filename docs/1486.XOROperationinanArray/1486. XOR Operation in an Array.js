var xorOperation = function (n, start) {
  const arr = [start];
  for (let i = 1; arr.length < n; i++) {
    arr.push(start + 2 * i);
  }
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = result ^ arr[i];
  }
  return result;
};
var xorOperation = function (n, start) {
  let result = start;
  for (let i = 1; i < n; i++) {
    result = result ^ (start + 2 * i);
  }
  return result;
};
const xorOperation = (n, start) => {
  let a = start;
  for (let i = 1; i < n; i++) {
    a = a ^ (start += 2);
  }
  return a;
};
var xorOperation = (n, start) => {
  return (
    Array(n - 1)
      .fill()
      // .map((_, i) => start + 2 * i)
      .reduce((acc, cur) => {
        acc = acc ^ (start += 2);
        return acc;
      }, start)
  );
};

console.log(`xorOperation(5,0)`, xorOperation(5, 0)); // 8
console.log(`xorOperation(4,3)`, xorOperation(4, 3)); // 8
console.log(`xorOperation(1,7)`, xorOperation(1, 7)); // 7
console.log(`xorOperation(10,5)`, xorOperation(10, 5)); // 2
