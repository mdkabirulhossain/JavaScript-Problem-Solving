function Fibonacci(n){
    let value01 = 0;
    let value02 = 1;
    let next=0;
    if(n <= 0){
        console.log("Invalid input");
    }
    if(n === 1){
        console.log(value01);
    }
    if(n === 2){
        console.log(value01, value02);
    }
    if(n>2){
        console.log(value01);
        console.log(value02);
        for(i=3; i<=n; i++){
            next = value01 + value02;
            console.log(next);
            value01 = value02;
            value02 = next;
        }
    }

}

let input = 7;
Fibonacci(input);