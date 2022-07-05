// class expression 
let Account = class {

    // constructor
    constructor(id,name,balance,email) {
        this.id = id;
        this.name= name;
        this.balance = balance;
        this.email=email;
    }

    showId() {
        console.log(`The Account id is ${this.id}`);
    }

    showAccount() {
        console.log(`
        The Account :
        id : ${this.id}
        name : ${this.name}
        balance : ${this.balance}
        email : ${this.email}
        `);
    }

    // set & get with es6 syntax
    get Id() { return this.id; }
    set Id(id) { this.id = id; }

    get Name() { return this.name ; } 
    set Name(name) { this.name = name ; } 
 
    get Balance() { return this.balance ; } 
    set Balance(balance) { this.balance = balance ; } 
 
    get Email() { return this.email ; } 
    set Email(email) { this.email = email ; } 
}

let account = new Account();

// set properties
account.Id = 1000;
account.Name ="john smith";
account.Balance =34893.34;
account.Email = "john.smith@gmail.com";

console.log(account);

//get values
console.log(account.Id);
console.log(account.Name);
console.log(account.Balance);
console.log(account.Email);

// account.showId();
// account.showAccount();