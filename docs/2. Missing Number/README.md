ссылка на задачу 

https://leetcode.com/problems/missing-number/

Из массива целых чисел от [0, n], нужно вернуть только одно число, которое пропущено в массиве.

[3,0,1] // 2
[0,1] // 2
[9,6,4,2,3,5,7,0,1] // 8
[0] // 1
---
> Первое "в лоб"

сложность данного алгоритма
<br/>
по времени: O(n^2) - потому, что сначала сортирую массив, потом использую цикл
<br/>
по памяти: O(n) - потому, что создаю сортированный массив


```ts
function missingNumber(nums: number[]): any {
  // пропущенное число, которое мы вернем
  let missingNumber = 0;
  // отсортируем массив
  let sortedArr = nums.sort((a,b)=>a-b);
  for (let i = 0; i < sortedArr.length; i++) {
    // тк числа в отсортированном массиве будут равны индексу,
    // делаем проверку, если число в массиве и i не равны возвращаем i
    if(sortedArr[i] !== i) return missingNumber=i
    // иначе "пропущено" будет следующее число
    else missingNumber = i + 1
  }
  return missingNumber
};
```

![в лоб](../../screenshots/2.%20Missing%20Number/v1_forhead.png "в лоб")
---
> второе решение подсмотрел тут 
> https://vlad10.notion.site/Missing-Number-Arrays-7d1c1c3920964cc8bb64693df2a4aa85

сложность данного алгоритма
<br/>
по времени: O(n) - потому, что использую reduce
<br/>
по памяти: O(1) - потому, что создаю только константы, которые можно "отбросить"

тут можно воспользоваться формулой расчета арифметической прогрессии
![арифметическая прогрессия](../../screenshots/2.%20Missing%20Number/v2_arithmetic_progression.png "арифметическая прогрессия")
```ts
function missingNumber(nums: number[]): any {
  // занесем длинну массива в переменную
  const length = nums.length;
  // и выведем разность 
  // суммы элементов, если бы все элементы были на месте 
  //и суммы элементов переданного массива
  return length*(length+1)/2 - nums.reduce((acc, curr)=>acc + curr)
};
```

![через арифметическая прогрессия](../../screenshots/2.%20Missing%20Number/v2_sum_of_elements.png "через арифметическая прогрессия")
