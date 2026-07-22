// 1. Given an array of numbers, remove duplicates and log the unique values only.
const array1 = [2,58,20,2,3,19,3,20];
const uniqueArray = [];

    for(let j = 0; j < array1.length; j++){
        if (!uniqueArray.includes(array1[j])) {
        uniqueArray.push(array1[j]);
        }
    }

console.log(uniqueArray);

// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.
const mixedarray = [2, 'naim', 26, 'A', 'UGV', 28];
const strings = [];
const numbers = [];

for(const item of mixedarray){
    if(typeof item === 'number'){
        numbers.push(item);
    }
    else if(typeof item === 'string'){
        strings.push(item);
    }
}

console.log("NUmber: ", numbers);
console.log("String: ", strings);
console.log("Mearg two array: ", numbers.concat(strings));

// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).
let max = array1[0];
let min = array1[0];
for(let i = 1; i < array1.length; i++){
    if(array1[i] > max){
        max = array1[i];
    }
    if(array1[i] < min){
        min = array1[i];
    }
}

console.log("MAX : ", max);
console.log("min : ", min);