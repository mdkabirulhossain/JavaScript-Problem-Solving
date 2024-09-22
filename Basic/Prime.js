function isPrime(n){
    let flag = 0;
    if(n === 0 || n===1){
        flag = 1;
    }
    else{
        for(let i=2; i<=n/2; i++){
            if(n%i == 0){
                flag = 1;
                break;
            }
        }
    }
    if(flag === 1){
        return `${n} is not prime`;
    }else{
        return `${n} is prime`;
    }
}

const num = 7;
const result = isPrime(num);
console.log(result);