const obj = {
  U: [0, -1],
  D: [0, 1],
  R: [1, 1],
  L: [1, -1],
};

const getNewPosition = (s, curDirectionIndex, curPos) => {
  const curLetter = s[curDirectionIndex];
  const curLetterObject = obj[curLetter];
  return curPos.map((el, i) =>
    curLetterObject
      ? i === curLetterObject[0]
        ? el + curLetterObject[1]
        : el
      : el
  );
};

const possibleSteps = (
  n,
  startPos,
  s,
  curDirectionIndex,
  num = 0,
  curPos = startPos
) => {
  const newPosition = getNewPosition(s, curDirectionIndex, curPos);
  const [row, col] = newPosition;
  const length = n - 1;
  if (
    row < 0 ||
    col < 0 ||
    col > length ||
    row > length ||
    s.length <= curDirectionIndex
  ) {
    return num;
  }
  return possibleSteps(n, startPos, s, ++curDirectionIndex, ++num, newPosition);
};

const executeInstructions = function (n, startPos, s) {
  const result = [];
  for (let index = 0; index < s.length; index++) {
    result.push(possibleSteps(n, startPos, s, index));
  }
  return result;
};

console.log('1', executeInstructions(3, [0, 1], 'RRDDLU')); // [1,5,4,3,1,0]
console.log('2', executeInstructions(2, [1, 1], 'LURD')); // [4,1,0,0]
console.log('3', executeInstructions(1, [0, 0], 'LRUD')); // [0,0,0,0]
