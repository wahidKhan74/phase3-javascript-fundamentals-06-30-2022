// 1. A JavaScript function is a block of code designed to perform a particular task.
// 2. A JavaScript function is executed when "something" invokes it (calls it).
// 3. Functions are one of the fundamental building blocks in JavaScript. 

// syntax : function decleration
// function funcName() { // fn body }

//1. Non parametrised function
function showMessage() {
    let message = "Welcome to JavaScript";
    console.log("Hello, today is a gooday , "+message);
}

//2. One parametrised function
function showData(data) {
    console.log("Hi,Today is a 'Greate' day.");
    console.log(data);
}

//3. Multi parametrised function
function fetchUser(name,age,gender) {
    console.log(`The user ${name} and its age ${age} and gender ${gender}`);
}

//4. default parametrised function
function getInfo(username="Admin", phone="1010101010", email="admin@gmail.com") {
    console.log(`
    The user ${username} has 
    phone : ${phone}  & 
    email : ${email}    
    `);
}



// function calling 
// showMessage();
// showMessage();
// showMessage();
console.log("-------------------");

// showData("John Smith");
// showData();
// showData(567565);
// showData({
//     id: 10001, name:"john smith", age:34, email:"john.smith@gmail.com"
// });

// fetchUser();
// fetchUser('John Smith');
// fetchUser('John Smith', 100, 'male');

getInfo();
getInfo("John Smith");
getInfo("John Smith",898989898, 'johns@gmail.com');