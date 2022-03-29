const findDuplicate = function(nums) {
  const arr = [...nums]
  let num = 0;
  while(true){
    const a = arr[num]
    if(a<0) {
      return num
    }
    arr[num] = -arr[num]
    num = a
  }
};


console.log('findDuplicate([1,3,4,2,2])', findDuplicate([1,3,4,2,2])) // 2
console.log('findDuplicate([3,1,3,4,2])', findDuplicate([3,1,3,4,2])) // 3
