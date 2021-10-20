let result = 'aaa'

for (let i = 0; i < result.length; i++) {
  if(result[i] == 'a') {
    console.log(`result1`, result)
    console.log(`result[i]`, result[i])
    result[i] = 'b'
    console.log(`result2`, result)
  } 
}

// const test = [
//   {
//     id: '001',
//     parentId: null,
//     children: [],
//   },
//   {
//     id: '002',
//     parentId: '001',
//     children: [],
//   },
//   {
//     id: '003',
//     parentId: '001',
//     children: [],
//   },
// ];
// const b = test.reduce((acc, cur)=> {
//   if(!cur.parentId) {
//     const a = test.reduce((accc, curr)=> {
//       if(curr.id !== cur.id){
//         accc.push(curr.id)
//       }
//       return accc
//     }, [])
//     acc.push({...cur, children: a})
//   } else acc.push(cur)
//   return acc
// }, [])

// console.log(`b`, b)
// // const floatConst = 0.9
// // let sum = 0
// // for (let i = 0; i < 10; i++) {
// //   sum += floatConst
// // }

// // const varMul = floatConst * 10

// // console.log(floatConst * 10)
// // console.log(sum)
// // console.log(varMul)
