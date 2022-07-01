const arr = [
  [ 1, -9,  9, -7, -5],   // [ 1, -9,  9, -7, -5],
  [ 3,  7,  2,  8, -1],   // [ 3,  7,  2,  8, -1],
  [-3, -7,  1,  1,  1],   // [-3, -7,  1,  1,  1],
  [ 1, -4, -5,  9,  9],   // [ 1, -4, -5,  9,  9],
  [ 1,  2,  2, -9,  1],   // [ 1,  2,  2, -9,  1],
];
const rotate = (board) => {
  const arr = JSON.parse(JSON.stringify(board));
  const N = arr.length;
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < i; ++j) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N / 2; ++j) {
      let temp = arr[i][j];
      arr[i][j] = arr[i][N - j - 1];
      arr[i][N - j - 1] = temp;
    }
  }
  return arr.map(el=>el.reverse());
};
function MaxSumMatrixRange(startRow, startCol, endRow, endCol, sum) {
  return {
    startRow,
    startCol,
    endRow,
    endCol,
    sum,
  };
}
function MaxSumRange(start, end, sum) {
  return { start, end, sum };
}
function getMaxSumRange(subArr) {
  let curSum = 0,
    windowStart,
    windowEnd = 0,
    maxSumRange = MaxSumRange(0, 0, subArr[0]);

  while (windowEnd < subArr.length) {
    curSum += subArr[windowEnd];
    if (curSum > maxSumRange.sum) {
      maxSumRange = MaxSumRange(windowStart, windowEnd, curSum);
    }
    if (curSum <= 0) {
      windowStart = windowEnd + 1;
      curSum = 0;
    }
    windowEnd++;
  }

  return maxSumRange;
}

function getMaxSumRange(arr) {
  const maxSumMatrixRange = MaxSumMatrixRange(0, 0, 0, 0, arr[0]);
  let sum = 0;
  for (const subArr of arr) {
    let curSum = 0,
      windowStart = 0,
      windowEnd = 0,
      maxSumRange = MaxSumRange(0, 0, subArr[0]);

    while (windowEnd < subArr.length) {
      curSum += subArr[windowEnd];
      if (curSum > maxSumRange.sum) {
        maxSumRange = MaxSumRange(windowStart, windowEnd, curSum);
      }
      if (curSum <= 0) {
        windowStart = windowEnd + 1;
        curSum = 0;
      }
      windowEnd++;
    }

    console.log('maxSumRange row', maxSumRange);
  }
  const newArr = rotate(arr);
  console.log('newArr', newArr)
  for (const subArr of newArr) {
    let curSum = 0,
      windowStart = 0,
      windowEnd = 0,
      maxSumRange = MaxSumRange(0, 0, subArr[0]);

    while (windowEnd < subArr.length) {
      curSum += subArr[windowEnd];
      if (curSum > maxSumRange.sum) {
        maxSumRange = MaxSumRange(windowStart, windowEnd, curSum);
      }
      if (curSum <= 0) {
        windowStart = windowEnd + 1;
        curSum = 0;
      }
      windowEnd++;
    }
    console.log('maxSumRange colum', maxSumRange);
  }

  return maxSumMatrixRange;
}

getMaxSumRange(arr); // { startRow: 1, endRow: 3, startCol: 3, endCol: 4, sum: 27 };
// console.log('getMaxSumRange(arr)', getMaxSumRange(arr)) // { startRow: 1, endRow: 3, startCol: 3, endCol: 4, sum: 27 };
