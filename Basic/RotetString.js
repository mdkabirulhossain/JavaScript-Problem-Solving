function rotateString() {
    let str = "ABCDEXZ";
    str = str.split("").reverse().join("");
    console.log(str);
}

rotateString();