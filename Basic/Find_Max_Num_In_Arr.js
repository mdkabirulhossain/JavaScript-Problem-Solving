const Find_Max_Num_Arr =(arr) =>{
//    return Math.max(...arr);
    let maximum = arr[0];
    for(let i=1; i<arr.length; i++){
        if(maximum < arr[i]){
            maximum = arr[i];
        }
    }
    return maximum;
}

const Array= [10, 12, 13, 17, 5, 9];
const MaxNum = Find_Max_Num_Arr(Array);
console.log(MaxNum);