function PrimeNumber(arr){
    let Array=[];
    for(let i=0; i<arr.length; i++){
        
        if(arr[i] === 0 || arr[i] === 1){
            continue;
        }
        else{
                if(arr[i]%2 !==0){
                    Array.push(arr[i]);
                }
        }
    }
    return Array;

}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = PrimeNumber(array);
console.log(result);