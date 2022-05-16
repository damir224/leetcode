// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

const chain = (input, fs) => fs.reduce((acc, cur) => (acc = cur(acc)), input);
