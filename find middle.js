const l = 7;
const r = 30;
// 30-7 = 23 / 2 = 11.5
const m = Math.floor((r - l) / 2); // 11
const m1 = Math.floor((r + l) / 2); // 18
const m2 = l + Math.floor((r - l) / 2); // 18
const m3 = l + r >> 1; // 18
const m4 = l + (r-l) >> 1; // 18

console.log('m', m)
console.log('m1', m1)
console.log('m2', m2)
console.log('m3', m3)
