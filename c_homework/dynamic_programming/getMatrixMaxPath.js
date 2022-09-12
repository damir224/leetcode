const matrix = [
  [-6, 3, 8, 0, 9],
  [2, -1, 2, 0, 4],
  [0, 1, -6, 1, 2],
  [1, 7, 6, 6, 2],
];

const getValueAndCoordinate = (matrixPath, row, col) => {
  if (row === 0) {
    return {
      value: matrixPath[row][col - 1].value,
      prevRow: row,
      prevCol: col - 1,
    };
  }
  if (col === 0) {
    return {
      value: matrixPath[row - 1][col].value,
      prevRow: row - 1,
      prevCol: col,
    };
  }

  const fromTop = matrixPath[row - 1][col].value;
  const fromLeft = matrixPath[row][col - 1].value;
  if (fromTop > fromLeft) {
    return {
      value: fromTop,
      prevRow: row - 1,
      prevCol: col,
    };
  } else {
    return {
      value: fromLeft,
      prevRow: row,
      prevCol: col - 1,
    };
  }
};

const getPath = (matrixPath, path, currentPlace) => {
  if (currentPlace.prevCol === -1 && currentPlace.prevRow === -1) {
    return;
  }
  getPath(
    matrixPath,
    path,
    matrixPath[currentPlace.prevRow][currentPlace.prevCol]
  );
  path.push([currentPlace.prevRow, currentPlace.prevCol]);
  return path;
};

const getMatrixMaxPathWrapper = (matrix) => {
  const pathArr = [];
  const matrixPath = Array(matrix.length)
    .fill()
    .map((el) => Array(matrix[0].length).fill());

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (row === 0 && col === 0) {
        matrixPath[0][0] = {
          value: matrix[0][0],
          prevRow: -1,
          prevCol: -1,
        };
        continue;
      }
      matrixPath[row][col] = getValueAndCoordinate(matrixPath, row, col);
      matrixPath[row][col].value += matrix[row][col];
    }
  }

  getPath(matrixPath, pathArr, matrixPath.at(-1).at(-1));
  pathArr.push([matrix.length - 1, matrix[0].length - 1]);

  return { value: matrixPath.at(-1).at(-1).value, path: pathArr };
};
console.log('getMatrixMaxPathWrapper(matrix)', getMatrixMaxPathWrapper(matrix));
