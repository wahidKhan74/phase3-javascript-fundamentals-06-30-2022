//  An arrow function expression is a compact alternative syntax to a traditional function expression syntax.
//  Arrow functions were introduced in ES6.
//  Arrow functions allow us to write shorter function

// Non Parametrised arrrow function
let showMessage =  () => {
    console.log("Hello, Arrow Function !");
}

showMessage();

// One Parametrised arrrow function
let calculateAge = (yearOfBirth) => {
    let currentYear  = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`The user age is : ${age}`);
    return age;
}

// Multi Parametrised arrrow function
let canVote = (username,yearOfBirth) => {
    let age = calculateAge(yearOfBirth);
    if(age>18) {
        console.log(`Hello user ${username}, you can vote.`);
    } else{
        console.log(`Hello user ${username}, you cannot vote.`);
    }
}

let calculateRetirement = (yearOfBirth) => {
    let age = calculateAge(yearOfBirth);
    if(age>60) {
        console.log(`The user is retired.`);
    } else {
        console.log(`The user have ${60-age} remaining year for retirement`);
    }
    return 60-age;
}




console.log("-----------------");
canVote('John Smith', 1970);
canVote('Mike Smith', 2018);
console.log("-----------------");
calculateRetirement(1990);
// console.log(calculateAge);
// calculateAge(1990);
// calculateAge(1980);
console.log("-----------------");

let oneLine = () => console.log("Hello to one linner arrow function");
let oneSqure = (number) => number * number;

oneLine();
console.log(oneSqure(20));