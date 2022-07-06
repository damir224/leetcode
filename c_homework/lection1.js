// С бекенда приходит массив такого вида:
var arr = [
  { name: 'width', value: 10 }, 
  { name: 'height', value: 20 },
  // ...
];

// Нужно получить объект такого вида:
/*
{
  width: 10,
  height: 20,
  ...
}
*/

function objFromArr(arr) {
  return arr.reduce((acc, cur)=> {
      return {...acc, [cur.name]:cur.value}
  }, {})
}
