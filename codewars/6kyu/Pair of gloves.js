function numberOfPairs(gloves) {
  const map = gloves.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  return Object.values(map).reduce((acc, cur) => {
    while (cur > 1) {
      acc++;
      cur = cur - 2;
    }
    return acc;
  }, 0);
}
