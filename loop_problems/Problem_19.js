// Task 5 — Even Numbers 
const number = 30;

for(let i = 0; i < number; i++){
    if(i === 0){
        continue;
    }
    else if(i % 2 === 0){
        console.log(i);
    }
}