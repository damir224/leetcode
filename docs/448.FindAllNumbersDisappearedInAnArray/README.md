ссылка на задачу 

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

Из массива целых чисел от [0, n], нужно вернуть только одно число, которое пропущено в массиве.

[4,3,2,7,8,2,3,1] // [5, 6]

[1,1] // [2]
---

> Первое "в лоб"

сложность данного алгоритма
<br/>
по времени: O(n^2) - потому, что цикл + indexOf
<br/>
по памяти: O(n) - потому, что создаю словарик

```ts
function findDisappearedNumbers(nums: number[]): number[] {
  // словарик
  const dict = []
  for (let i = 1; i < nums.length + 1; i++) {
    // проверка есть-ли в массиве число
    nums.indexOf(i) === -1 && dict.push(i)
  }
  return dict
};
```

---

> Второе посмотрел
> https://vlad10.notion.site/Find-All-Numbers-Disappeared-in-an-Array-Arrays-Cyclic-sort-613eb1a960fe493aad9e6fc9a0b40f66

сложность данного алгоритма
<br/>
по времени: O(n^2) - потому, что цикл + indexOf
<br/>
по памяти: O(n) - потому, что создаю словарик

Cyclic Sort

```ts

```
---

> Третье посмотрел
> https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/discuss/1212505/O(n)-Constant-Space-JavaScript.-Solution-with-explanation.

сложность данного алгоритма
<br/>
по времени: O(n^2) - потому, что два раза пробегаюсь по массиву
<br/>
по памяти: O(n) - потому, что создаю только рузультирующий массив

```ts
function findDisappearedNumbers(nums: number[]): number[] {
  nums.forEach((number) => {
    const indexNumber = Math.abs(number) - 1
    if (nums[indexNumber] > 0) {
      nums[indexNumber] = nums[indexNumber] * -1
    }
  })
  return nums.reduce((acc, cur, i) => {
    if (cur > 0) {
      acc.push(i + 1)
    }
    return acc
  }
  , [])
};
```
![в лоб](../../screenshots/3.%20Find%20All%20Numbers%20Disappeared%20in%20an%20Array/v3_mark%20negative.png "в лоб")
---

такое же как и решение выше только написано самостоятельно
```ts
function findDisappearedNumbers(nums: number[]): number[] {
  const length = nums.length
  let i = 0
  while( i < length ) {
      const pos = nums[i] - 1;
      if(nums[i] !== nums[pos]) {
        [nums[i], nums[pos]] = [nums[pos], nums[i]];
      } else {
        i += 1;
      }
  }
  return nums.reduce((acc, cur, i)=>{ 
      if(nums[i] !== i + 1) {
          acc.push(i + 1)
      }
      return acc
  }, [])
};
```
