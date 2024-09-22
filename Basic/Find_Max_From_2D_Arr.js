function maxFromNestedArr(arr){
    let max =arr[0][0];

    //Row length = arr.length
    //Column length = arr[0].length
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[0].length; j++){
            if(max < arr[i][j]){
                max = arr[i][j];
            }
        }
    }
    return max;

}

const arr = [
    [1, 2, 3, 4],
    [5, 6, 24, 7], 
    [8, 9, 1, 2]
]

const MaxValue = maxFromNestedArr(arr);
console.log(MaxValue);