function rotateString() {
    let str = "ABCDEX";
    str = str.split("").reverse().join("");
    console.log(str);
}

rotateString();