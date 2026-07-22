// Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.
const resultForString = '5'
const resultNember = 5;

//convert to string to number
const result = parseInt(resultForString);

if(result == resultNember){
    console.log("Is True!");
}
else{
    console.log('Sorry is false!');
}

if(result === resultNember){
    console.log("Is True!");
}
else{
    console.log("Sorry is false");
}