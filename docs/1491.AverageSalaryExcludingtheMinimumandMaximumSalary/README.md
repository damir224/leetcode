ссылка на задачу 

https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

---

```js
const average = function(salary) {
    const arr = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
    let sum = 0
    const size = salary.length
    for(let i = 0; i < size; i++){
      const currentSalary = salary[i]
      arr[0] = Math.min(arr[0], currentSalary)
      arr[1] = Math.max(arr[1], currentSalary)
      sum += currentSalary
    }

  return (sum - arr[0] - arr[1]) / (size-2)
};
```
---
