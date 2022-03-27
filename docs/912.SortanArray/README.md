ссылка на задачу 

https://leetcode.com/problems/sort-an-array/


---
radix sort
<br/>
tc - O(n*k)
<br/>
sc - O(n)
```js
const getBucketIndex = (num, i) => {
  return Math.trunc((num / Math.pow(10, i)) % 10);
};
const initializeBuckets = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push([]);
  }
  return arr;
};
const arrToBuck = (bucket, queue, digitPosition, negativeBucket) => {
  let cont = false;
  for (let index = 0; index < queue.length; index++) {
    const buckIndex = getBucketIndex(Math.abs(queue[index]), digitPosition);
    if(queue[index] >= 0) {
      bucket[buckIndex].push(queue[index]);
    } else {
      negativeBucket[buckIndex].push(queue[index]);
    }
    if (buckIndex) {
      cont = true;
    }
  }
  return cont;
};
const moveBucketsToArray = (bucket, negativeBucket) => {
  const negArr = negativeBucket.reduceRight((acc,cur,i,arr)=> {
    if (cur.length) {
      acc.push(...cur)
      arr[i]=[]
      }
      return acc
    }, []);
  const arr = bucket.reduce((acc,cur,i,arr)=> {
    if(cur.length){
    acc.push(...cur)
    arr[i]=[]
    }
    return acc
  }, []);
  return [...negArr, ...arr]
};

var sortArray = function (nums) {
  let isSorting = true;
  let digitPosition = 0;
  let queue = [...nums];
  const bucket = initializeBuckets();
  const negativeBucket = initializeBuckets();
  while (isSorting) {
    isSorting = arrToBuck(bucket, queue, digitPosition, negativeBucket);
    queue = moveBucketsToArray(bucket, negativeBucket);
    digitPosition++;
  }
  return queue;
};
```
