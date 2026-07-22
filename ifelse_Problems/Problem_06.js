// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).
const year = 2008;

if((year % 4 === 0 && year /100 !== 0) || year % 400 === 0){
    console.log("This year leap year.");
}
else{
    console.log("Not Leap Year.");
}