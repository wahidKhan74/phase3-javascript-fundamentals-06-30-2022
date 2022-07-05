// clas decleration
class Employee {

    // properties
    id;
    name;
    salary;
    dept;

    // constructor
    constructor(id, name, salary, dept) {
       this.id = id;
       this.name = name;
       this.salary = salary;
       this.dept = dept;
    }
    // methods
    showId() {
        console.log(`User id is : ${this.id}`);
    }

    showEmployee() {
        console.log(`
        The Employee :
        id : ${this.id}
        name : ${this.name}
        salary : ${this.salary}
        dept : ${this.dept}
        `);
    }
}

let employee = new Employee(10001, "John Snow", 56567.67, "Engineering");
console.log(employee);


// access properties
console.log(employee.id);
console.log(employee.name);
console.log(employee.salary);

//access methods
employee.showId();
employee.showEmployee();