How to create a JavaScript class in ES6?
--------------------------------------------

        class EmpOne {
        constructor(givenName, givenSalary) {
            this.name = givenName;
            this.salary = givenSalary;
        }
        }

        let res = new EmpOne("Harry", 45);
        console.log(res);
        
        [[Prototype]]: Object
        
        O/p - EmpOne { name: 'Harry', salary: 45 }
