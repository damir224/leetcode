> Первое решение через словарик

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

> второе решение в одну строчку, хотя и длинную

```ts
var containsDuplicate = function(nums: number[]):boolean {
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

> решил попробовать через Set, оказалось самым оптимальным

```ts
var containsDuplicate = function (nums: number[]): boolean {
  return [...new Set(nums)].length !== nums.length
};
```

![через Set](../../screenshots/1.%20Contains%20Duplicate/v3_with_set.png "через Set")
