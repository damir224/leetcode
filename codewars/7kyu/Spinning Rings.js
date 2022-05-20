function spinningRings(innerMax, outerMax) {
  let n1 = innerMax, n2 = 1, count=1;
  while(n1!==n2){
    n1 = n1===0 ? innerMax : n1-1;
    n2 = n2===outerMax ? 0 : n2+1;
    count++
  }
  return count
};
