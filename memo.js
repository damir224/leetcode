const memoPow = (el) => {
  const cash = {};
  return el => {
    if(!cash[el]){
      cash[el] = el**2
      console.log('cash empty',cash[el])
    }
    return cash[el]
  }
}

const pow = memoPow()

console.log('pow(3)', pow(3))
console.log('pow(3)', pow(3))
