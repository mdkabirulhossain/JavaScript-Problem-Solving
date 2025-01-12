function positive_negative(x, y){
    if((x<0 && y>0) || (x>0 && y<0)){
        return true;
    }else{
        return false;
    }
}

let input1= positive_negative(2, 2);
console.log(input1)
let input2= positive_negative(-2, 2);
console.log(input2)
let input3= positive_negative(2, -2);
console.log(input3)