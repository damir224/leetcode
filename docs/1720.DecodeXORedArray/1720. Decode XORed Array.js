var decode = function(encoded, first) {
    encoded = [first,...encoded]

    for(let i = 1;i < encoded.length;i++){
        first ^= encoded[i]
        encoded[i] = first;
    }

    return encoded;
};
var decode = function(encoded, first) {
    return [...encoded].reduce((acc,cur, i)=>{
      first = first^cur
    }, [])
};
console.log(`decode([1,2,3], 1)`, decode([1,2,3], 1)) // [1,0,2,1]
console.log(`decode([6,2,7,3], 4)`, decode([6,2,7,3], 4)) // [4,2,0,7,4]
