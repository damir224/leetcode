
// не будет работать, так for..of or for..in возвращают строку
var filter = function (arr, fn) {
    const newArray = [];
    for (let i in arr) {
        const currentEl = arr[i];
        if (fn(currentEl, i)) {
            newArray.push(currentEl);
        }
    }
    return newArray;
};

var filter1 = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const currentEl = arr[i];
        if (fn(currentEl, i)) {
            newArray.push(currentEl);
        }
    }
    return newArray;
};

function firstIndex(n, i) {
    return i === 0;
}
const a = [1, 2, 3];
console.log(0, filter(a, firstIndex));
console.log(1, filter1(a, firstIndex));
