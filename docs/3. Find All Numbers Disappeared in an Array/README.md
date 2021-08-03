ссылка на задачу 

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

Из массива целых чисел от [0, n], нужно вернуть только одно число, которое пропущено в массиве.

[4,3,2,7,8,2,3,1] // [5, 6]
[1,1] // [2]


> Первое "в лоб"

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
![в лоб](../../screenshots/3.%20Find%20All%20Numbers%20Disappeared%20in%20an%20Array/v1_forhead.png "в лоб")

> второе решение подсмотрел тут 
> https://vlad10.notion.site/Missing-Number-Arrays-7d1c1c3920964cc8bb64693df2a4aa85

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
