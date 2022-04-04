ссылка на задачу 

https://leetcode.com/problems/reverse-words-in-a-string-iii/


---
```js
const reverseWords = function (s) {
  const arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let min = 0,
      max = arr[i].length - 1;
    let newArr = arr[i].split('')
    while (min <= max) {
      [newArr[min], newArr[max]] = [newArr[max], newArr[min]]
      min++;
      max--;
    }
    arr[i] = newArr.join('')
  }
  return arr.join(' ');
};
```
---
```js
const reverseWords = function (s) {
  return s.split(' ').map(el=>el.split('').reverse().join('')).join(' ')
}
```
