ссылка на задачу 

https://leetcode.com/problems/contains-duplicate/

нужно вернуть true, если в массиве есть число, которое повторяется хотя бы один раз

[1,2,3,1] // true
[1,2,3,4] // false
[1,1,1,3,3,4,3,2,4,2] // true
---
> Первое решение через словарик

сложность данного алгоритма
<br/>
по времени: O(n^2) - потому, что есть map and filter
<br/>
по памяти: O(n^2) - потому, что создаю словарик + массив (Object.values)

```ts
var containsDuplicate = function(nums:number[]):boolean {
  // создаю словарик
  const dict = {}
  // заполняю его, где ключ - цифра, значение - сколько эта цифра встречается раз, например:
  // **{'1': 2}**
  nums.map(el=>dict[el] ? dict[el]++ : dict[el] = 1)
  // проверка, есть ли значения которые больше нуля
  return Object.values(dict).filter(el=>el>1).length > 0
};
```

![через словарик](../../screenshots/1.%20Contains%20Duplicate/v1_dict.png "через словарик")
---
> второе решение такое же как и первое, но в одну строчку, хотя и длинную

сложность данного алгоритма
<br/>
по времени: O(n^2) - потому, что есть reduce and filter
<br/>
по памяти: O(n) - потому, что создаю массив через filter

```ts
var containsDuplicate = function(nums: number[]):boolean {
  // через reduce возвращаю объект,где ключ - цифра, значение - сколько эта цифра встречается раз, например:
  // **{'1': 2}**
  // через Object.values получаем масив значений, и проверяем, есть ли значения которые больше нуля
  return Object.values(nums.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue]++
    }
    else {
      accumulator[currentValue] = 1
    }
    return accumulator
  }, {})).filter(el=>el>1).length > 0
};
```


![в одну строку](../../screenshots/1.%20Contains%20Duplicate/v2_one_line.png "в одну строку")
---
> решил попробовать через Set, оказалось самым оптимальным

сложность данного алгоритма
<br/>
по времени: O(1) - потому, что при изменении исходного массива, операции не добавятся
<br/>
по памяти: O(n^2) - потому, что создаю массив через Set и деструктуризирую

```ts
var containsDuplicate = function (nums: number[]): boolean {
  // Set возвращает массив уникальных значений, и делаем проверку длинны
  return [...new Set(nums)].length !== nums.length
};
```

![через Set](../../screenshots/1.%20Contains%20Duplicate/v3_with_set.png "через Set")
