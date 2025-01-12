let name = "abcd";

let num = 120;

// name = num;
// console.log(name);

//Another option

this[name] = num;
console.log(this[name]);