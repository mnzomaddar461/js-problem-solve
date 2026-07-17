// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).
const weight = 60;
const height = 174;

const heightInMeters = height / 100; 
const bmi = weight / (heightInMeters * heightInMeters);

if(bmi < 18.5){
    console.log("Underweight");
}
else if(bmi < 24.9){
    console.log("Normal Weight.");
}
else if(bmi < 29.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
}