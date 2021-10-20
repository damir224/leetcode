ссылка на задачу 

https://leetcode.com/problems/decode-xored-array/


---

```js
var decode = function(encoded, first) {
  const a = first^encoded[0]
  const b = a^encoded[1]
  const c = b^encoded[2]
  return [first, a, b, c]
};

console.log(`decode([1,2,3], 1)`, decode([1,2,3], 1)) // [1,0,2,1]
console.log(`decode([6,2,7,3], 4)`, decode([6,2,7,3], 4)) // [4,2,0,7,4]

```
---

```js
var decode = function(encoded, first) {
  let a = first
  return [first, ...encoded.map((e,i)=>{
    i===0 ? a=e^first : a=e^a
    return a
  })]
};
```
---
```js
var decode = function(encoded, first) {
  let a = [first]
  encoded.forEach((e,i)=>{
    a.push(e^a[i])
  })
  return a
};
```
---
```js
var decode = function(encoded, first) {
    return [...encoded].reduce((acc,cur)=>{
      acc.push(first^=cur)
      return acc
    }, [first])
};
```
---
the fastest - 100ms
```js
var decode = function(encoded, first) {
    encoded = [first,...encoded]

    for(let i = 1;i < encoded.length;i++){
        first ^= encoded[i]
        encoded[i] = first;
    }

    return encoded;
};
```
---
1ms
```java
class Solution {
    public int[] decode(int[] encoded, int first) {
        int res[] = new int[encoded.length + 1];
        res[0] = first;
        for (int i = 0; i < encoded.length; i++) {
            res[i+1] = res[i] ^ encoded[i];
        }
        return res;
    }
}
```
---
