// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).
const month = 4;

if(month === 12 || month === 1 || month === 2){
    console.log("Season is Winter. ");
}
else if(month === 3 || month === 4 || month === 5){
    console.log("Season is Summer");
}
else if(month === 6 || month === 7 || month === 8){
    console.log("Season is Rainy.");
}
else{
    console.log("Season is Autumn.");
}