// 1. Given an array of numbers, remove duplicates and log the unique values only.
const array1 = [2,58,20,2,3,19,3,20];
const uniqueArray = [];

    for(let j = 0; j < array1.length; j++){
        if (!uniqueArray.includes(array1[j])) {
        uniqueArray.push(array1[j]);
        }
    }

console.log(uniqueArray);