function Factorial(num){
    let result=1;
    for(let i=1; i<=num; i++){
        result *= i;
    }
    return result;
}

let input= 4;
const result = Factorial(input);
console.log(result);