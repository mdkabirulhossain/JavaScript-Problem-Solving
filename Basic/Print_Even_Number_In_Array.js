function evenNumber(arr){
    return arr.filter(num => num%2 ===0);
}

const array =[2, 3, 4, 5, 6, 7, 8, 9, 0];
const output = evenNumber(array);
console.log(output);