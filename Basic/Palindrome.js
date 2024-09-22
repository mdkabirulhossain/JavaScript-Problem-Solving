function isPalindrome(str){
    return str === str.split("").reverse().join(""); 
}

let output = isPalindrome("MadaM");
console.log(output);
if(output === true){
    console.log("Given String is a Palindrome");
}else{
    console.log("Not Palindrome");
}
