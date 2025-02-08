let n=5;

for(let row =1; row<=n; row ++){
    let line= "";
    for(let space = 1; space <= n-row; space ++){
       line += " ";
    }
    for(let star = 1; star<= (2*row) -1; star++){
        line+="*";
    }
    console.log(line);
}