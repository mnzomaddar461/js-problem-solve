// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.
let marks = 79;

if(marks >= 90 && marks <= 100){
    console.log("A+");
}
else if(marks >= 80 && marks <= 89 ){
    console.log("A");
}
else if(marks >= 70 && marks <= 79){
    console.log("B");
}
else if(marks >= 60 && marks <= 69 ){
    console.log("C");
}
else{
    console.log("F");
}
