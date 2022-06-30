
// keyword var   :  var keyword has function level scope & can reassign the value.
// keyword let   :  let keyword has block level scope & can reassign the value.
// keyword const :  const keyword has block level scope & cannot reassign the value.

// A language is dynamically typed if the 
// data type is associated with run-time values.

// global variable
var age = 100;
let username = "john";
const isMarried = true;

function display() {

    // local varaible
    var flag = true;

    // if block
    if(flag) {
        var itemOne = "Laptop";
        let itemTwo = "Mobile";
        const itemThree = "Watch";

        itemTwo = "Gamming Mobile";
        // itemThree = "Gamming Watch"; // Uncaught TypeError: Assignment to constant variable.

        console.log("itemOne : ", itemOne);
        console.log("itemTwo : ", itemTwo);
        console.log("itemThree : ", itemThree);
    }

    // console.log(flag);
    console.log("itemOne :>> ", itemOne);
    // console.log("itemTwo :>> ", itemTwo);  //  Uncaught ReferenceError: itemTwo is not defined
    // console.log("itemThree :>> ", itemThree); // Uncaught ReferenceError: itemThree is not defined
}

// console.log(flag);  // Uncaught ReferenceError: flag is not defined

display();