Var, Let and Const
===========================================================================================
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