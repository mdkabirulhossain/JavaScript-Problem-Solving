function is_palindrome(str){
    let rev = str.split("").reverse().join("");
    return str === rev;
}

function longest_palindrome(str){
    let max_length =0;
    let maxp = "";

    for(let i =0; i<str.length; i++){
        let subs = str.substr(i, str.length);

        for(let j =subs.length; j>=0; j--){
            let sub_subs_str = subs.substr(0, j);

            if(sub_subs_str.length <= 1)
                continue;
            
            if(is_palindrome(sub_subs_str)){
                if(sub_subs_str.length > max_length){
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
        
    }
    return maxp;
}

console.log(longest_palindrome("abracadabra"));