// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".
const isLoggedIn = false;
const isAdmin = true;

if(isLoggedIn === true && isAdmin === true){
    console.log("Admin Dashbord.");
}
else if(isLoggedIn === true && isAdmin === false){
    console.log("User Dashboard");
}
else{
    console.log("Please Login");
}

//  Determine whether a number is even or odd using the ternary operator.
const number = 7;
const result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);