ссылка на задачу 

https://leetcode.com/problems/first-bad-version/

сложность данного алгоритма
<br/>
по времени: O(log(n))
<br/>
по памяти: O(1)


```js
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let min = 1, max = n, mid = Math.floor(min + (max-min)/2);
      while(min <= max) {
        
        if(isBadVersion(mid) === true) {
          if(isBadVersion(mid-1) === false) {
            return mid
          }
          max = mid
        } else {
          if(isBadVersion(mid+1) === true) {
            return mid+1
          }
          min = mid
        }
        mid = Math.floor(min + (max-min)/2)
      }
      return 1
    };
};
```
