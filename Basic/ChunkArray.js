var chunk = function(arr, size) {
    const chunked = []
    let index = 0

    while (index < arr.length) {
        chunked.push(arr.slice(index, size + index))
        index += size
    }
    
    return chunked
};

let arr= [1, 2, 3, 4, 5, 6];
const len = arr.length;

console.log(chunk(arr, 2));
