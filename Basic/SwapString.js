function first_last(str1){
    if(str1 <= 1){
        return str1;
    }
    
    mid_char = str1.slice(1, str1.length - 1);
    return(str1.charAt(str1.length - 1)) + mid_char+str1.charAt(0);
}

console.log(first_last("abc"));