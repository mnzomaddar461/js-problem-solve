// Task 9 — Sum of Even Numbers
const number = 50;
let sum = 0;

for(let i = 0; i < number; i++){
    if(i % 2 === 0){
        sum = sum + i;
    }
}

console.log(sum);