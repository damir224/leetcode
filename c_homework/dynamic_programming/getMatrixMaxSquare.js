const matrix = [
    [1, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1],
];

const checkRight = (row, col, value, squareArr) => {
    if (col + value >= squareArr.length) {
        return false;
    }
    return squareArr[row][col].rightDot >= value;
};
const checkDown = (row, col, value, squareArr) => {
    if (row + value >= squareArr.length) {
        return false;
    }
    return squareArr[row][col].downDot >= value;
};

const getSquareValue = (matrix, row, col, squareArr) => {
    if (matrix[row][col] === 0) {
        return { rightDot: 0, downDot: 0 };
    }
    if (row === matrix.length - 1) {
        const prevValue = squareArr[row][col + 1];
        const curValue = matrix[row][col] + prevValue.rightDot;
        return { rightDot: curValue, downDot: matrix[row][col] };
    }
    if (col === matrix.length - 1) {
        const prevValue = squareArr[row + 1][col];
        const curValue = matrix[row][col] + prevValue.downDot;
        return { rightDot: matrix[row][col], downDot: curValue };
    }
    const prevDownValue = squareArr[row + 1][col];
    const curDownValue = matrix[row][col] + prevDownValue.downDot;
    const prevRightValue = squareArr[row][col + 1];
    const curRightValue = matrix[row][col] + prevRightValue.rightDot;

    return { rightDot: curRightValue, downDot: curDownValue };
};

const getMatrixMaxSquare = (matrix) => {
    const l = matrix.length;
    const squareArr = Array(l)
        .fill(null)
        .map(() =>
            Array(l)
                .fill(null)
                .map(() => ({ rightDot: 0, downDot: 0 }))
        );
    for (let row = l - 1; row >= 0; row--) {
        for (let col = l - 1; col >= 0; col--) {
            if (row === l - 1 && col === l - 1) {
                const currentValue = matrix[row][col];
                squareArr[row][col] = {
                    rightDot: currentValue,
                    downDot: currentValue,
                };
                continue;
            }
            squareArr[row][col] = getSquareValue(matrix, row, col, squareArr);
        }
    }
    const result = {
        coords: [-1, -1],
        value: -1,
    };
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            const { rightDot, downDot } = squareArr[row][col];
            if (rightDot === 0 && downDot === 0) {
                continue;
            }
            const curMin = Math.min(rightDot, downDot);
            const curValue = curMin === 1 ? 1 : curMin - 1;

            if (
                checkRight(row, col, curValue, squareArr) &&
                checkDown(row, col + curValue, curValue, squareArr) &&
                checkDown(row, col, curValue, squareArr) &&
                checkRight(row + curValue, col, curValue, squareArr)
            ) {
                if (result.value < curValue) {
                    result.coords[0] = row;
                    result.coords[1] = col;
                }
            }
        }
    }

    return result;
};
console.log('getMatrixMaxSquare(matrix)', getMatrixMaxSquare(matrix));
