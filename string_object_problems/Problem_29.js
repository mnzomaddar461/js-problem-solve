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

//What is an Object ? 
// Object is an importent part in codeing life. Object mainlly using on create a product info or profile info etc. Inside the object has many type of keys, and thi keys mainlly represent charectaristic of object. If you want to access a kye on object is possible. This the most part or benifit of object is at same time init more info but same task not possible on string.


// Task 8

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
}

console.log("Current info of car: ", car);
const carbrand = car.brand;
console.log("Brand: ", carbrand);

const carmodel = car["model"];
console.log("Model: ", carmodel);

car["color"] = 'Bule';
const carcolor = car["color"];
console.log("Color: ", carcolor);
car.year = 2023;

console.log("Update info: ", car);

// Task 9
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
const keys = Object.keys(book);
console.log(keys);

const value = Object.values(book);
console.log("Values: ", value);
delete book.pages;
console.log("after delete: ", book);

// Task 10
let user = {
    username: "coder123",
    address: {
    city: "Austin",
    zip: "78701"
    }
}

console.log("Cite Name: ", user.address.city);
user.address.country = 'USA';

delete user.address.zip;
console.log("After all update : ", user);

// Task 11
let scores = { math: 90, science: 85, art: 95 };
for(let key in scores){
    console.log(key + ":" + scores[key]);
}

let result = 0;
for(let value in scores){
    result += scores[value];
}

const average  = Object.keys(scores).length
const finalresult = result / average;
console.log("average : ", finalresult);

// Task 12
// Build a small "contact" system:
let contact = {
    name: "Alex Johnson",
    email: "ALEX@EMAIL.COM",
    phone: "555-1234"
};
contact.email = contact.email.toLocaleLowerCase()
console.log("Update Email: ", contact);

for(const pair in contact){
    console.log(pair + ": " + contact[pair]);
}

contact.favoriteWords = [];
contact.favoriteWords.push("Mr");
contact.favoriteWords.push(" Naim");
contact.favoriteWords.push(" Zomaddar");

console.log("Add New proparty: ", contact);

console.log(contact.email.toLocaleLowerCase().endsWith("@email.com"));