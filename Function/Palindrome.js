function is_palindrome(str){
    let rev = str.split("").reverse().join("");
    return rev === str;
}

let str1 = "abc";
let result = is_palindrome(str1);

if(result === true){
    console.log(str1 + " is a Palindrome");
}else{
    console.log(str1 + " is not a Palindrome");
}