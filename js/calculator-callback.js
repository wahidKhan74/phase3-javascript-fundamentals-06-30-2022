let calculator = function(num1, num2 , callback) {
    return callback(num1, num2);
}

// add function
let add = function(num1, num2) {
    return num1 + num2;
}
// sub function
let sub = function(num1, num2) {
    return num1 - num2;
}
// mul function
let mul = function(num1, num2) {
    return num1 * num2;
}
// div function
let div = function(num1, num2) {
    return num1 / num2;
}
// avg function
let avg = function(num1, num2) {
    return (num1 + num2) / 2;
}

let x = 1000;
let y = 500;

console.log(`The addition of ${x} + ${y} = ${calculator(x,y,add)}`);
console.log(`The substraction of ${x} - ${y} = ${calculator(x,y,sub)}`);
console.log(`The multiplication of ${x} * ${y} = ${calculator(x,y,mul)}`);
console.log(`The division of ${x} / ${y} = ${calculator(x,y,div)}`);
console.log(`The average of ${x} & ${y} = ${calculator(x,y,avg)}`);