// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.
let minPueces = 1000;
const isMember = false;

if(minPueces >= 1000 && isMember === true){
    console.log("After 20% discount and total Price: ", minPueces * 0.8);
}
else if(minPueces >= 1000){
    console.log("After 10% discount and total Price: ", minPueces * .9);
}
else{
    console.log("No discount and total Price: ", minPueces);
}