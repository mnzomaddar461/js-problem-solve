// Using age and hasID, use nested if-else to check whether someone is eligible to vote.
let age = 14;
const hasID = true;

if(age >= 18 && hasID === true){
    console.log("eligible to vote.");
}
else if(age < 18 && hasID === false){
    console.log("Not eligible to vote");
}
else{
    console.log("Not eligible to vote")
}
