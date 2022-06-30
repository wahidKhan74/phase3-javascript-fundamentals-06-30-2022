// An IIFE (Immediately Invoked Function Expression) is a 
// JavaScript function that runs as soon as it is defined / created. 

(function() {
    console.log("IIFE :: Immediately Invoked Function Expression.");
})();

// 1. non parametrised iife
(function() {
    let username= "johnsmith";
    let password = "john@123";

    // nested fn in iife
    function display() {
        console.log(`The user :: ${username} has password :: ${password}.`);
    }

    display();
})();

// 1. parametrised iife

(function(username,password) {
    // nested fn in iife
    function display() {
        console.log(`The user :: ${username} has password :: ${password}.`);
    }
    display();
})("mikesmith","mike@1233");