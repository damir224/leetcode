const nearestValidPoint = function (x, y, points) {
  let min = Number.MAX_SAFE_INTEGER,
    index = -1;
  for (let i = 0; i < points.length; i++) {
    const [curX, curY] = points[i];
    if (curX !== x && curY !== y) {
      continue;
    }
    const curMin = Math.abs(curX - x) + Math.abs(curY - y);
    if (curMin < min) {
      min = Math.min(min, curMin);
      index = i;
    }
  }
  return index;
};

console.log(1, nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])); // 2
console.log(2, nearestValidPoint(3, 4, [[3,4]])); // 0
console.log(3, nearestValidPoint(3, 4, [[2,3]])); // -1
console.log(4, nearestValidPoint(3, 4, [[3,4]])); // 0
console.log(5, nearestValidPoint(1, 1, [[1,1],[1,1]])); // 0
console.log(6, nearestValidPoint(1, 1, [[1,2],[3,3],[3,3]]));  // 0
