//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 1

function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    return day==0 || day==6 ? "weekend" : "weekday";
}

console.log(isWeekend());