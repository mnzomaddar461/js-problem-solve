const array = ['kamal', 'jamal', 'tomal'];
console.log(array);
console.log(array.length);
console.log(array[0]);
console.log(array[2]);
array[1] = "Naim";
console.log(array);
array.push('korim');
console.log(array);
const removeItem = array.pop();
console.log(array);
console.log("Remove Item: ", removeItem);
array.unshift('rohim');
console.log(array);
const removeFrist = array.shift();
console.log(array);
console.log("remove frust item: ", removeFrist);
const hastrue = array.includes('Naim');
console.log(hastrue);
const position = array.indexOf('Naim');
console.log(position);
const sizeofarray = array.length;
for(let i = 0; i < sizeofarray; i++){
    console.log(array[i]);
}
let j = 0
while(j < sizeofarray){
    console.log(array[j]);
    j++;
}
