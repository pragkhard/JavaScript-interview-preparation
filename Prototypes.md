Prototype in JavaScript
==========================
In JavaScript, prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects.

Why Use Prototype?
--------------------
When multiple objects need the same method, instead of defining it inside each object, we use prototype to save memory and improve efficiency.

Example Without Prototype (Inefficient)
----------------------------------------
Each object gets its own copy of the greet function (bad for performance).

        function Person(name) {
        this.name = name;
        this.greet = function () {
            console.log("Hello, " + this.name);
        };
        }

        const p1 = new Person("Alice");
        const p2 = new Person("Bob");

        p1.greet(); // Hello, Alice
        p2.greet(); // Hello, Bob

---------------------------------------------------------------------------------------

Example With Prototype (Efficient)
Here, greet is shared across all objects created from Person, reducing memory usage.

        function Person(name) {
        this.name = name;
        }

        // Adding method to prototype
        Person.prototype.greet = function () {
        console.log("Hello, " + this.name);
        };

        const p1 = new Person("Alice");
        const p2 = new Person("Bob");

        p1.greet(); // Hello, Alice
        p2.greet(); // Hello, Bob
________________________________________
Key Points:
✅ Prototype allows method sharing → Saves memory
✅ Objects can inherit properties from prototypes
✅ Used in JavaScript's inheritance system (prototype chain)
Let me know if you need a deeper dive! 🚀
