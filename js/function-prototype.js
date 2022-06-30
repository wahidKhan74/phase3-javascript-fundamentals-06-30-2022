// create a constructor
function Account (id, name, balance, email) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

// add properties into Account prototype
Account.prototype.nationality = "American";
Account.prototype.state = "Texas";

// add methods/function into Account prototype
Account.prototype.showBalance = function() {
    console.log(`The Balance is ${this.balance}`);
}


// create function object
let account1 = new Account(10001,'John smith', 346546.567, 'john.smith@gmail.com');

account1.balance = 99999.999;

console.log(account1);
console.log(account1.name);
console.log(account1.balance);

//access property & methods from prototype
console.log(account1.nationality);
console.log(account1.state);
account1.showBalance();
console.log("-----------------");


let account2 = new Account(10002,'Will smith', 996546.567, 'will.smith@gmail.com');

account2.balance = 888888.88;
console.log(account2);
console.log(account2.name);
console.log(account2.balance);
//access property & methods from prototype
console.log(account2.nationality);
console.log(account2.state);
account2.showBalance();
