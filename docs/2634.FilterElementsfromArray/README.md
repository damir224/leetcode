ссылка на задачу 

https://leetcode.com/problems/filter-elements-from-array

```js
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        const currentEl = arr[i]
        if (fn(currentEl, i)) {
            newArray.push(currentEl)
        }
    }
    return newArray
};
```
