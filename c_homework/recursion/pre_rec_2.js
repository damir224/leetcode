const findMaxElement = (arr) => {
  if(arr.length === 0) {
    return 0;
  }

  const curEl = arr.pop();
  const prev = findMaxElement(arr)
  return prev < curEl ? curEl : prev
};

console.log('result: ', findMaxElement([1, 4, 22, -1])); // 22
