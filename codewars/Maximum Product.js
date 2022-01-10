// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

const adjacentElementsProduct = (a) =>
  Math.max(...a.map((e, i) => e * a[i + 1]).slice(0, -1));
// function adjacentElementsProduct(array) {
//   let max = array[0] * array[1];
//   let prev = array[1];
//   for (let i = 2; i < array.length; i++) {
//     max = Math.max(max, prev * array[i]);
//     console.log('max number', max);
//     prev = array[i];
//   }
//   return max;
// }

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]); // -14
// adjacentElementsProduct([5, 8]); // 40
// adjacentElementsProduct([1, 2, 3]); // 6
// adjacentElementsProduct([1, 5, 10, 9]); // 90
// adjacentElementsProduct([4, 12, 3, 1, 5]); // 48
// adjacentElementsProduct([5, 1, 2, 3, 1, 4]); // 6
