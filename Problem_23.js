// Task 10 — Using Break 
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.
const number = 50;

for(let i = 0; i < number; i++){
    console.log(i);
    if(i >= 30){
        break;
    }
}