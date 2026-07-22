// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).
const roleCheck = 'user';
const username = 'test';
const password = 'Acd12%';

if(username === 'test' && password === 'Acd12%'){
    console.log("Login Success !");
    if(roleCheck === 'admin'){
        console.log("Define your role: ", roleCheck);
        console.log("Wellcome to admin dashboard.");
    }
    else{
        console.log("Define your role: ", roleCheck);
        console.log("Wellcome to user dashboard.");
    }
}
else{
    console.log("Chack 'username' & 'password' then again try !");
}