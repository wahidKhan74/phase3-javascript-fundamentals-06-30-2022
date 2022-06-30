// A constructor is a special function that creates and initializes an object instance 
// JavaScript, a constructor gets called when an object is created using the new keyword. 
// The purpose of a constructor is to create a new object and set values for any existing object properties.

// function constructor for employee
function Employee (id, name, salary, dept) {
    this.id = id;
    this.name= name;
    this.salary = salary;
    this.dept = dept;
}

// function constructor for bank account
let Account = function (id, name, balance, address) {
    this.id = id;
    this.name= name;
    this.balance = balance;
    this.address = address;
}

// create employe object : functional object
let employee1 = new Employee();
let employee2 = new Employee(1002,"Harish", 45456.45, "Dev");


let account1 = new Account(10001,"Harish", 56545.45, "Ak street, 201 block");


console.log(employee1);
console.log(employee2);

console.log(account1);