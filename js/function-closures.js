// A nested function are closures & it can access three diff scope values
// global varaibles
// outer function varaible and paramenters
// inner function varaible and paramenters

let firstName = "John";  // Global variable
let email = "john@gmail.com";

function fullName(email) {
    let middleName = "William"; // local varaible or outer varaible

    // nested function or closures
    function combine(email) {
        let lastName = "Smith"; // local vraible or inner vraible.
        return `${firstName} ${middleName} ${lastName}
        & your email is ${email}.
        `;
    }

    return combine(email);
}

console.log(fullName(email));