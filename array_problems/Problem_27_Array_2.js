const array1 = ['Mr ', 'Naim', 'Zomaddar'];
const array2 = ['CSE', 'UGV', 'Barisal'];
const array3 = 34;
const array4 = [2,49, 23, 21, 4, 89, 10];


const margearray = array1.concat(array2);
console.log(margearray); // marge to array 


const jointArray = array1.join(' ');
console.log(jointArray); // join all elements in array 

console.log(typeof(array1)); // chack object or number --> object
console.log(typeof(array3)); // chack object or number --> number 

console.log(Array.isArray(array1)); // chack array or number --> true
console.log(Array.isArray(array3)); // chack number or array --> false

console.log(array1.reverse()); // Array reverse

const sortarray1 = array1.sort(); // array sort for alpebatic way
console.log(sortarray1);

array4.sort((a, b) => a - b); // array sort for accending order
console.log(array4);

for(let i = 0; i < array4.length; i++){{
    if(array4[i] > 10){
        console.log(array4[i]);
    }
}}

let sum = 0;
for(let i = 0; i < array4.length; i++){
    sum = sum + array4[i];
}

console.log(sum);