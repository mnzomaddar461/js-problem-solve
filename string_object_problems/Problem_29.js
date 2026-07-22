// Task 1
let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

console.log(str.length);
console.log(arr.length);

console.log(str[0]);
console.log(arr[0]);

arr.push("!");
console.log(arr);

// task 2
const string = 'Javasript';
const charstr = string.split("");
console.log(charstr);

const joinarr = arr.join("");
console.log(joinarr);

// Task 3
console.log(string.toLocaleUpperCase());
console.log(string.toLocaleLowerCase());
const string2 = "  Mr Naim Zomaddar   ";

console.log(string2);
console.log(string2.trim());
console.log(string2.trimStart());

// Task 4
let sentence = "Learning JavaScript is fun!";
const parts = sentence.slice(0, 8);
console.log(parts);
console.log(sentence);
const lasts = sentence.slice(-4);
console.log(lasts);

// Task 5
//Use .concat() to join "Hello" and "World" into "Hello World".
const str1 = "Hello";
const ste2 = "World";

let meargstr = str1.concat(" ", ste2);
console.log(meargstr);

//Use + and template literals to do the same thing. Compare all three approaches.
let meargstr2 = str1 + " " + ste2;
console.log(meargstr2);

//Task 6
//Reversal Methods

const string3 = "Hello World";
const parts1 = string3.split('');
const reverseparts = parts1.reverse();
const reversestring3 = reverseparts.join('');
console.log(string3);
console.log(parts1);
console.log(reverseparts);
console.log(reversestring3);

// same task using loop
console.log("Using loop");
let reversestring4 = "";
for(const charstr of string3){
    reversestring4 = charstr + reversestring4
}
console.log(reversestring4);

// Task 7
//Build a Profile Object
const Profile = {
    name : 'Mr Naim Zomaddar',
    age : 22,
    grade : "CGPA: 3.20",
    isEnrolled : true,
}

console.log(Profile);
console.log(Profile.name);

