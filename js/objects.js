// Javascript Object is a collection of key values pair,
// for example A product is an object with properties such as id,name,size,price etc.

// Object literal
let productOne  = {
    id : 10001,
    name: "Apple Iphone 11",
    price: 34343,
    desc: 'It is a apple mobile nothing like apple.'
}

console.log(productOne);
console.log(productOne.id);
console.log(productOne.name);
console.log("--------------");
console.log(productOne['id']);
console.log(productOne['name']);

// create object via Object constructor 
let productTwo = new Object({
    id : 10002,
    name: "Apple Iphone 9",
    price: 1343,
    desc: 'It is a apple iphone 9 mobile nothing like apple.'
});

console.log(productTwo);

// create object via Function constructor 
function Product(id,name,price,desc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
}

// functional object
let productThree = new Product(10003,"Apple iphone6", 454, "it is a old iphone");
let productFour = new Product(10004,"Apple iphone3", 254, "it is a old iphone");
console.log(productThree);
console.log(productFour);