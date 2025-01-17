function is_palindrome(str){
    let rev = str.split("").reverse().join("");
    return rev === str;
}


console.log(is_palindrome("aba"));