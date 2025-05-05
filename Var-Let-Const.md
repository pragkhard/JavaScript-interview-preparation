Var, Let and Const
===========================================================================================

Topics -
----------
* Difference between Var, Let and Const
* Scope
* Type of Scope
* Block & Block Scope
* Variable Shadowing
* Illegal Shadowing
* Declaration
* Declaration without Initialization
* Re-Initialization
* Hoisting
* Javascript exection context
* Temporal Dead Zone (TDZ)


Difference between Var, Let and Const
---------------------------------------
Point - 1
-----------
Variables define with "var" can be redeclared and reasigned. 
even declare it without providing it any value.

        var a = "Hello";
        var a = "Pragati";
        a = "Khard"; 

        var a;

Variables define with "let" can't be redeclared but can be reassigned. 
If i will redeclared it will give the Syntax error: `Variable has already been declared`.
but we can declared the variable without providing it any value. 

        let a = "Hello"
        let a = "Pragati" (Can't)
        a= "Khard" 

        let a
 

Variable define with "const" can't be redeclared and reassigned.
If i redeclared it will give Syntax error: `Missing initializer in const declaration` and 
If i reassigned it will give type error: `Assignment to constant variable error`.
 
but in case of "const" we need to provide some value. We can not be delared without initializing it otherwise it will give us the Syntax Error: `Missing initializer in const declaration`
 
        cost a "Hello";
        cost a = "Pragati"; (Can't)
        a = "Khard"; (Can't)

        cost a; (can't)
        cost a = 5;

Point - 2
-----------

Variable defne with "var" have global scope or function scope means if the variable declared inside of the block {} can be accessed outside of the block.
 
but the variable define with "let" and "const" are the block scope means the variable declared inside of the block can not access outside the block.

Point - 3
----------

The problem comes with var. 
Suppose are using var and we have one forloop and inside of the forloop we are updating the i because of var what happened so i will be having the same memory allocation.so it will updating the same value.
 
Because of the concern Es6 features get introduced with a block scope. So, with the block scope everytime loops runs, it creates another block scope for this function / It will be a seperate momory allocation.

        for (var i = 0; i < 5; i++) {
          setTimeout(function() {
            console.log(i);
          }, 1000);
        }

        O/p - 5 5 5 5 5 5

        for (let i = 0; i < 5; i++) {
          setTimeout(function() {
            console.log(i);
          }, 1000);
        }

        O/p - 0 1 2 3 4

if you want to stick with var, you can use an Closures or the IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration:

Closures - 

        for (var i = 0; i < 5; i++) {
        function inner(i) {
            setTimeout(function () {
            console.log(i);
            }, 1000);
        }
        inner(i)
        }

        O/p - 0 1 2 3 4

IIFE -

        for (var i = 0; i < 5; i++) {
          (function(i) {
            setTimeout(function() {
              console.log(i);
            }, 1000);
          })(i);
        }
        
        O/p - 0 1 2 3 4


Point - 4
-----------

Variable define with "var" can be hoisted and it will give the the output undefined. 
But in case of "let" and "const" it will give us the "reference error" because it will hosted in the temporal dead zone. 

TDZ is basically a time blw the `declaration` and `initillization`. Bascially if we see in the development tool we can see variable declared with "var" attached to the "Global scope" and variable declared with "let" and "const" will be in the seperate "script block" which is reside in the tdz. The Variable is the TDZ it will give the "reference error".

Point - 5
-----------
* "var" and "let" are the mutable variable.
Mutable variable are the variables whose values is changed any number of the time.

* "const" are the immutable variable
Immutable variable are the variables whose values is never changed in the complete life cycle of the program.

What is scope and How many types of scope in JS?
-----------------------------------------------------
Scope is the certain region of the program where a defined variable exist and can be recognized and beyond that it can not be recognized. There can be multiple type of scopes-
        1.	Global scope- without any block and any function its a global scope.
        2.	Block scope - {  }
        3.	Functional scope - function (){ }

What is block in JS?
----------------------
* Block is defined by these curly braces.
        {

        }
* Block is also known a compound statements.
* Block is used to combine multiple JS statement into one group. So, that we can use it where JS expects one statement. OR

        if (){
        //compound statements
        var a = 10;
        console.log(a);
        }

* Wrapping up of the multiple statement group together so that we can use it in a place where JS expects one statement.

What is Block Scope in JS?
--------------------------
* Block scope means what all the variables and functions we can access inside that block that is know as block scope.
Example-  
        {
        var a = 10;
        Let b = 20;
        const c = 30;
        }
        
        Block
        b: undefined
        c: undefined
        Global
        a: undefined

* Block scope is a separate memory space or we can say ‘let’ and ‘const’ hosted in a separate memory space that reversed for this ‘block’.
* You can not access ‘let’ and ‘const’ outside the block that is know as ‘let’ and ‘const’ in ‘Block Scope’.
* Whereas you can access ‘var’ even outside the because ‘var’ is in the ‘Global scope’.
* In short let and const is the block scope (it can be accessible inside the block) and var is the functional scope.


Variable Shadowing:
-------------------
In JavaScript, variable shadowing occurs when a variable with the same name as a variable in a higher scope is declared in a lower scope.
It's a common practice but can lead to confusion if not used carefully because the inner variable will "shadow" the outer variable.
In first example, let a inside the if block shadows the outer let a, and they are two separate variables despite having the same name.

        function test() {
            let a = "Hello";
  
            if (true) {
            let a = "Hi"; // New value assigned, the inner variable will overlap to the outer variable.
            console.log(a);
            }
  
            console.log(a);
        }
  
         test();

         O/P - Hi Hello

Inner a is shadow the outer a. It will overlap the value but still it just going to be only accessible inside the block outside the block a sill be “hello”. Shadowing a variable, it should not cross the boundary of scope that is we can shadow var variable by using let but cannot do the opposite so if we shadow let variable by var variable is know as illegal shadowing and it give us the error that the variable is already defined. 

But in place of "let, const" if we will use "var" it will not overlap

        function test() {
            var a = "Hello";
        
            if (true) {
            var a = "Hi"; // New value assigned
            console.log(a);
            }
        
            console.log(a);
        }
        
        test();

       O/P - Hi Hi

Illegal Shadowing:
-------------------
This occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const.
In second example, var b = "Bye"; is illegal shadowing because b is already declared using let in the same scope.

We can shadow "var" variable by using "let" but can not do the opposite 

//Legal Shadowing : We can shadow "var" variable by using "let/const"

        function test() {
            var a = "GeeksforGeeks";
        
            if (true) {
            let a = "Hi"; // Legal Shadowing
            console.log(a); 
            }
        }
        test();

        O/p - Hi

 But can't do this -
 // Illegal Shadowing : We can't shadow "let/const" variable by using "var"

        function test() {
            let a = "GeeksforGeeks";
        
            if (true) {
            var a = "Hi"; // Illegal Shadowing
            console.log(a); 
            }
        }
        test();

       O/p - SyntaxError: Identifier 'a' has already been declared

One more example - 

        function test() {
            var a = "GeeksforGeeks";
            let b = "Namaste";
        
            if (true) {
            let a = "Hi"; // Legal Shadowing
            var b = "Bye"; // Illegal Shadowing
            console.log(a); // It will print 'GeeksforGeeks'
            console.log(b); // It will print error
            }
        }
        test();

        O/p - SyntaxError: Identifier 'b' has already been declared

Others Example - 
----------------
Example - 1 (Shadowing in Variable-)
---------------

        var a = 100;
        {
          var a = 10;
          let b = 20
          const c = 30;
  
          console.log(a)
          console.log(b)
          console.log(c)
        }
        console.log(a)
       
        O/p - 10 20 30 10

Developer tools - 

        Block
          b: undefined
          c: undefined
        Global
          a:100 then 10
        Inner var a = 10; is shadow and it is also modify the outer variable value.
        But the both variable referring to the same memory space that is ‘Global Space’.

Example - 2
------------
        let b = 100;
        {
          var a = 10;
          let b = 20
          const c = 30;
  
          console.log(a)
          console.log(b)
          console.log(c)
        }
        console.log(b)

        O/p - 10 20 30 100

Developer tools -  
        Block
          b:20
          c:30
        Script
          b:100
          Global
          a:10

Example - 3
------------
        var c = 100;
        function x(){
        var c = 30;
        console.log(c)
        }
        x()
        console.log(c)

        O/p - 30 100

Declaration
--------------
We can redeclared "var" but can't be redeclared "let" and "const" in the same scope

            var a;
            var a;

            let a;
            let a;

            // O/p - SyntaxError: Identifier 'a' has already been declared

            const a;
            const a;

            // O/p - SyntaxError: Missing initializer in const declaration

            let a;
            {

            let a;

            }
            //It is completely fine comes under shadowing

Declaration without Initialization
-------------------------------------

"var" and "let" we can declare it without providing it any value but "const" can't be declared it without initialization

            var a;

            let a;

            const a; 
            * O/p - SyntaxError: Missing initializer in const declaration
            * const a = 20; //correct way

Re-Initialization
----------------------
"var" and "let" we can be Re-Initialization but "const" can't be Re-Initialization

            var a = 10;
            a = 20;

            let a = 10;
            a = 20;

            const a = 10;
            a = 20; 
            O/p - TypeError: Assignment to constant variable.

Hoisting:
----------------
In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
However, only the declarations are hoisted, not the initializations or assignments.
In third example, console.log(a); will result in undefined because the variable a is hoisted to the top but not initialized until later in the code (var a = 10;).

            console.log(a);
            var a = 10;

Temporal Dead Zone (TDZ):
-----------------------------
TDZ is a specific behavior related to variables declared using let and const. It refers to the period between the start of the block scope and the actual declaration of the variable.
During the TDZ, accessing the variable will result in a ReferenceError.
In fourth example, trying to log a, b, and c before their respective declarations will result in ReferenceError because they are in the TDZ until they are declared.

TDZ is the time between the declaration and the initilization of let and const variables.

            console.log(a, b);
            const c = 30;
            let b = 20;
