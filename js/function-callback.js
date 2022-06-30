
// A callback is a function passed as an argument to another function.  or 
// A JavaScript callback is a function which is to 
// be executed after another function has finished execution. 

let x = function () {
    console.log("I am X function");
}


let y = function (callback) {
    console.log("I am Y function");
    // console.log(callback);
    callback();
}

// y(100);
y(x);

console.log("----");
y(function () {
    console.log("I am Anonymous function");
});