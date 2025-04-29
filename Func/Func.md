Functions
=====================
 
Function Declaration-
----------------------
        function square(num) {
        return num * num;
        }
        square()

Function Expression-
--------------------
When we store the function inside variable 

        const square = function (num) {
        return num * num;
        }
        <!-- square(5) -->
        console.log(square(5))   

First Class Function -
----------------------
pass to the another function just like the variable 

        function square(num) {
        return num * num;
        }

        function displaySquare(fn) {
        console.log("Square is " + fn(5));
        }
        displaySquare(square);

Question 1: Function Code
Explanation: This code defines a function square that calculates the square of a number and a function displaySquare that logs the square of 5 using the square function.

Question 2: What is IIFE?
---------------------------
Explanation: IIFE stands for Immediately Invoked Function Expression. It is a function that is executed immediately after it is defined. 
Example 1 shows a simple IIFE, while Example 2 demonstrates an IIFE with nested functions.

        Eg-1

        (function square(num) {
        console.log(num * num);
        })(7);

        Eg-2

        (function (x) {
        return (function (y) {
        console.log(x);
        })(2);
        })(1);

        O/p - 1

Question 3: Closure
--------------------------
Explanation: The code demonstrates closure where the inner function displayName has access to the variable name defined in the outer function init.

Question 4: Function Scope
----------------------------
Explanation: This code showcases function scope and variable shadowing. 
In Q-1, the mul function uses the variables num1 and num2 from the global scope. 
In Q-2, the setTimeout function inside a loop creates a closure but uses the global i variable.

        Q-1

        var num1 = 20,
        num2 = 3,
        name = "Roadsidecoder";

        function mul() {
        return num1 * num2;
        }
        console.log(mul());

        function getScore() {
        var num1 = 3,
        num2 = 4;
        function add() {
        return name + " scored " + (num1 + num2);
        }
        return add();
        }
        console.log(getScore());

        //  O/p - 
        //  60
        // Roadsidecoder scored 7
---------------------------------------------------------------------------------------------
        Q-2

        for (var i = 0; i < 5; i++) {
        setTimeout(function () {
        // 3 times 5
        console.log(i);
        }, i * 1000);
        }

        O/p - 
        5
        5
        5
        5
        5
---------------------------------------------------------------------------------------------
        Q-3
        
        for (var i = 0; i < 5; i++) {
        setTimeout(function () {
        // 3 times 5
        console.log(i);
        }, i * 1000);
        }    

        O/p - 
        0
        1
        2
        3
        4
---------------------------------------------------------------------------------------------------

Question 5: Function Hoisting
------------------------------
Explanation: Function hoisting allows calling a function before it is declared. The code demonstrates hoisting with a function declaration and how it behaves differently from non-hoisted functions.

        Without Hoisting:

        function functionName() {
        console.log("work at tech");
        }

        functionName();         // function is called after declaring it
----------------------------------------------------------------------------------------------------

        With Hoisting:

        functionName();        // function is called before declaring it

        function functionName() {
        console.log("work at tech");
        }

-----------------------------------------------------------------------------------------------------
        
        functionName();   

        console.log("Global Scope"+" "+x)
        function functionName() {
        console.log("Function Scope"+" "+x)
        }
        var x = 21;        
        
        O/p-
        Function Scope undefined
        Global Scope undefined
----------------------------------------------------------------------------------------------------
        
        functionName();    

        console.log("Global Scope"+" "+x)
        function functionName() {
         var x = 21;
        console.log("Function Scope"+" "+x)
        }
        var x = 21

        O/p 
        Function Scope 21
        Global Scope undefined
-----------------------------------------------------------------------------------------------------       
        functionName();  
        
        console.log("Global Scope"+" "+x)
        function functionName() {
        console.log("Function Scope"+" "+x)
         var x = 21;
        } 

        O/p-
        Function Scope undefined

        console.log("Global Scope"+" "+x)
        ReferenceError: x is not defined
--------------------------------------------------------------------------------------------------
        
        var x = 21;
        var fun = function () {
        //local scope        
        console.log(x);
        var x = 20;
        };
        fun();

        O/p - undefined

When the variable present in the local scope it will not go and check the global scope

--------------------------------------------------------------------------------------------------

Question 6: Params vs. Arguments
----------------------------------
Explanation: This code defines a function fn with parameters a, x, y, and a rest parameter numbers, showcasing how parameters are declared and used in functions.

        const fn = (a, x, y, ...numbers) => { //Params
        console.log(x, y)
        };
        fn(5, 6, 7, 8); //arguments

        O/p - 6 7

Question 7: Spread operator and rest operator
-----------------------------------------------
Explanation: The code shows the usage of the rest parameter in a function declaration and the spread operator to pass an array as individual arguments to the function.

        function multiply(...nums) {  // rest operator ,should always be the last one
        console.log(nums[0] * nums[1]);
        }
        var arr = [5, 7];
        multiply(...arr) // Spread operator

        O/p- 35
-----------------------------------------------------------------------------------------------------

        const fn = (a, ...numbers,x,y) =>{
        console.log(x,y)
        }
        fn(5,6,3,7)

        O/p - SyntaxError: Rest parameter must be last formal parameter

        
        const fn = (a,x,y, ...numbers) =>{
        console.log(x,y)
        }
        fn(5,6,3,7)   

        O/p- 6 3    

Question 8: Callback
-----------------------
Explanation: This code demonstrates a callback function greeting being passed as an argument to the processUserInput function, allowing dynamic behavior based on user input.

        function greeting(name) {
        alert('Hello ' + name);
        }

        function processUserInput(callback) {
        var name = prompt('Please enter your name.');
        callback(name);
        }

        processUserInput(greeting);

greeting is the callback function

Question 9: Arrow functions
------------------------------
Explanation: Arrow functions are shown in two forms: one with explicit return and braces, and another with implicit return when the function body is a single expression.

        const add = (firstNum, secondNum) => {
        return firstNum + secondNum;
        }

        const addNum = (firstNum, secondNum) => firstNum + secondNum;

Question 10: Difference between Arrow functions and the normal function
--------------------------------------------------------------------------
       1. Syntax
       -----------
        
        const square (num) {
        return num * num;
        }

        const square = (num) => {
        return num * num;
        }


        2. Implicit return keyword
        ----------------------------

        const square = (num) => return num * num;

        3. arguments
        ---------------

        function fn(){
             console.log(arguments)   
        }
        fn()
       
        O/p -  [Arguments] { '0': 1, '1': 2, '2': 3 }

         function fn = () =>{
             console.log(arguments)   
        }
        fn(1,2,3)

        O/p- Reference Error: Arguments not defined
        

Question 11: this
-------------------
Explanation: The code defines an object user with methods rc1 and rc2. rc1 uses an arrow function, resulting in this referring to the global object, while rc2 uses a regular function, allowing this to refer to the object itself.

        let user = {
        name: "Roadside Coder",
        rc1: () => {
        console.log("Subscribe to " + this.name); // Pointing to the global obj
        },
        rc2() {
        console.log("Subscribe to " + this.name); // Pointing to the user
        },
        };

        user.rc1(); 
        user.rc2(); 

        O/p- 
        Subscribe to Roadside Coder
        Subscribe to Roadside Coder
