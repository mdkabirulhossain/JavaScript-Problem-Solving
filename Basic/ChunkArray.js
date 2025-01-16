var chunk = function(arr, size) {
    const newArr = []
    let index = 0

    while(index < arr.length){
        newArr.push(arr.slice(index, index+size));
        index += size;
    }
    return newArr;
};

let arr= [1, 2, 3, 4, 5, 6];
const len = arr.length;

console.log(chunk(arr, 4));
