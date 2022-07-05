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

    getId() { return this.id; }
    setId(id) { this.id = id; }

    getName() { return this.name ; } 
    setName(name) { this.name = name ; } 
 
    getBalance() { return this.balance ; } 
    setBalance(balance) { this.balance = balance ; } 
 
    getEmail() { return this.email ; } 
    setEmail(email) { this.email = email ; } 
}

let account = new Account();

// set properties
account.setId(1000);
account.setName("john smith");
account.setBalance(34893.34);
account.setEmail("john.smith@gmail.com");

console.log(account);

//get values
console.log(account.getId());
console.log(account.getName());
console.log(account.getBalance());
console.log(account.getEmail());

account.showId();
account.showAccount();