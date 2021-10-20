ссылка на задачу 

https://leetcode.com/problems/range-sum-query-immutable/

реализовать класс, на вход массив, ["NumArray", "sumRange", "sumRange", "sumRange"], 

где  NumArray - входной массив, sumRange - три промежутка


NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1

numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1

numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

---
на js
```js
var NumArray = function(nums) {
    this.dict = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        this.dict[i] = this.dict[i-1] + nums[i]
    }
 };
 
 NumArray.prototype.sumRange = function(i, j) {
     if(i===0) {return this.dict[j]}
     else {
         return this.dict[j] - this.dict[i - 1]
     }
 };
```
---
на ts медленее
```ts
class NumArray {
  constructor(public nums: number[]) {
      this.dict = [nums[0]]
      for(let i = 1; i < nums.length; i++) {
          dict.push(nums[i]+this.dict[i-1])
      }
  }
  sumRange(left: number, right: number): number{
      let sum = 0
      for(let i = left; i <= right; i++) {
          sum += this.nums[i]
      }
      return sum
  }
}
```
---

на ts быстрее
```ts
class NumArray {
  dict: number[]
  constructor(nums: number[]) {
    this.dict = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
      this.dict.push(nums[i] + this.dict[i - 1])
    }
  }
  sumRange(left: number, right: number): number {
    if(left === 0) {
      return this.dict[right]
    } else {
      return this.dict[right] - this.dict[left - 1]
    }
  }
}

```
