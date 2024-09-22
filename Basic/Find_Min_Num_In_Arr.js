function MinNumberInArr(arr){
    let min = arr[0];
    for(let i =0; i<arr.length; i++){
        if(min> arr[i]){
            min = arr[i];
        }
    }
    return min;

}

const array = [10, 23, 4, 2, 44, 55];
const MinNumber = MinNumberInArr(array);
console.log(MinNumber);