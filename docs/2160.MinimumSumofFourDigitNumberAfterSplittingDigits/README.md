ссылка на задачу 

https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

```js
const minimumSum = function(num) {
  const a = num.toString().split('').sort()
  const arr = []
  arr.push(a[0]+a[2]);
  arr.push(a[1]+a[3]);
  return arr.reduce((acc, cur)=>{
    acc+=+cur
    return acc
  },0)
};
```

```js
const minimumSum = function(num) {
  const a = num.toString().split('').sort()
  return +(a[0] + a[2])+ +(a[1]+ a[3])
};
```
