// A function expression is  a syntax to declare a function with assignment to varaible.
// function expression : 1) Labled function expression 2) Anonymous function expression

// syntax :
// let variableName = function functionName(x, y) { statements... return (z) };

// 1) Labled function expression
let calculateAge = function calculate(yearOfBirth) {
    let currentYear = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`Hi Your calculated age is : ${age}`);
    return age;
}


// console.log(calculateAge);


// 2) Anonymous function expression
let calculateRetirement = function(yearOfBirth=1880) {
    let age = calculateAge(yearOfBirth);
    if(age > 60) {
        console.log(`You are retired.`);
    } else{
        console.log(`You have ${60-age} remaining year for retirement`);
    }
}



// calculate();  // Uncaught ReferenceError: calculate is not defined
// calculateAge(1990);
// calculateAge(1890);
// calculateAge();

calculateRetirement(1900);
calculateRetirement(2000);
calculateRetirement();