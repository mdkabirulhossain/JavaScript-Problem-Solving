function Factorial(num){
    let result=1;
    if(num === 0){
        return result;
    }
    for(let i=1; i<=num; i++){
        result *= i;
    }
    return result;
}

let input= 0;
const result = Factorial(input);
console.log(result);