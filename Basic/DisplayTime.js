let today = new Date();
//console.log(today);

let day = today.getDay();

console.log("day: ", day);
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: ", daylist[day]);

let hour = today.getHours();
console.log("Hours: ", hour);

let minutes = today.getMinutes();
console.log("Minutes: ", minutes);

let second = today.getSeconds();
console.log("Second: ", second);

let prepand = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour - 12 : hour;

if(hour === 0 && prepand === 'PM'){
    if(minutes === 0 && second === 0){
        hour = 12;
        prepand = "Noon";
    }
    else{
        hour = 12;
        prepand = "PM";
    }
}

if(hour === 0 && prepand === "AM"){
    if(minutes === 0 && second === 0){
        hour= 12;
        prepand= 'Midnight';
    }
    else{
        hour = 12;
        prepand = "AM";
    }
}

console.log("Current time: ", hour, prepand, " : ", minutes, " : ", second);