const input = [
  { value: 'qweq', order: 4, expired: false },
  { value: 'asdq', order: 2, expired: true },
  { value: 'jkri', order: 1, expired: false },
  { value: 'oiod', order: 3, expired: false },
];

const inputConcat = (input) => {
  const arr = Array(input.length).fill('');
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (!input[i].expired) {
      const currentWord = input[i].value
        .split('')
        .reverse()
        .reduce((acc, cur) => {
          if (!map[cur]) {
            acc += cur;
            map[cur] = true;
          }
          return acc;
        }, '');
      arr[input[i].order] = currentWord;
    }
  }
  return arr.join('');
};

console.log('inputConcat(input)', inputConcat(input));

const inputConcat2 = (input) => {
  const arr = Array(input.length).fill('');
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (!input[i].expired) {
      const currentWord = [];
      for (let k = input[i].value.length; k >= 0; k--) {
        const cur = input[i].value[k];
        if (!map[cur]) {
          currentWord.push(cur);
          map[cur] = true;
        }
      }
      arr[input[i].order] = currentWord.join('');
    }
  }
  return arr.join('');
};

console.log('inputConcat2(input)', inputConcat2(input));
// [Done] exited with code=0 in 0.284 seconds

// [Done] exited with code=0 in 0.065 seconds
