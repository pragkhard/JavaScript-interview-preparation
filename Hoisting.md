What is Hoisting?
----------------------
Hoisting is a phenomenon is JS by which you can access variable and function even before you have initialized it. We can access it without any error.
During the creation phase JS engine moves the variable and function declarations to the top of the code this is know as the hoisting.

Example-
---------
If I declare the variable and if I try to console.log before it was declared. We will get undefined. We will not get any error. How the JS execution context works. It will declare all of these variable and function at the top of the code during the creation phase then when the execution happen it checks if the variable already exists during the creation phase is or not so obviously its exists so it give us undefined. 


Variable Hoisting-
--------------------
With-
------
            console.log(a);
            var a =10;

            o/p- undefined	

Without-
--------
            var a =10;
            console.log(a);

            o/p- 10

Function Hoisting-
-------------------
With-
------
            sum(5,4);
            function sum(a,b){
                add = a+b;
                console.log(add);
            }

Without- 
--------
            function sum(a,b){
                add = a+b;
                console.log(add);
            }
            sum(5,4);

Hoisting is not working in Function expression.
------------------------------------------------
With-
------
            sum(4,4);
            var sum = function(a,b){
                add = a*b;
                console.log(add);
            }
            o/p- Uncaught TypeError: sum is not a function

Without-
--------
            var sum = function(a,b){
                add = a*b;
                console.log(add);
            }
            sum(4,4);

            o/p-16	
          

Hoisting is not working in Arrow Function.
------------------------------------------
With- 
------
            sum(3,5);
            var sum = (a,b)=>{
                add = a*b;
                console.log(add);
            }
            o/p- Uncaught TypeError: sum is not a function

Without-
---------            
            var sum = (a,b)=>{
                add = a*b;
                console.log(add);
            }
            sum(3,5);

            0/p-15	
     
 
Hoisting is not working in let and const.
--------------------------------------------
With "let"-
-----------
            console.log(a);
            let a =10;

            o/p- Uncaught ReferenceError: a is not defined	

With "Const"-
-------------
            console.log(a);
            const a =10;

            o/p- Uncaught ReferenceError: a is not defined

What is temporal dead zone?
-----------------------------
* "Let" and "const" is also hosted but It will hosted in the temporal dead zone.
* Temporal dead zone(TDZ) is the time since when the ‘let and ‘const’ variable hoisted till initialize some value that time between that known as the Temporal dead zone(TDZ).
* From hoisting till it assigned or it get some value/ Initialize some value that phase know as the temporal dead zone. 
* Temporal dead zone(TDZ) is the time between the deceleration and the initialization of let and const variable.
* In other words we can say that it is the mechanism where variable and function declaration moved to the top of their scope before the code execution.

            console.log(a)
            console.log(b)
            let a = 10;
            var b = 20;
            O/p - ReferenceError: Cannot access 'a' before initialization

Are let and const declaration hoisted?
-----------------------------------------
So, whenever you try to access a variable inside the temporal dead zone it gives you the ‘reference error’. They can only be access once some value initialize to them.
Best way to avoid temporal dead zone is always put declaration and initialization on the top of the scope. 

            Script
                a: undefined
            Global
            alert: f alert()
            atob: f atob()
            b: undefined

“a” is attached to the global object but incase of ‘let and ‘const’ they are allocate memory but they are stored in different / separate memory space and you can not access memory space before you have put some value in them.

How JavaScript works and how the code is executed?
----------------------------------------------------
Everything in JavaScript happens inside an “Execution context”.
Execution context- its like a big box or we can say that the environment in which our code is expected and evaluated.

It has two components-

* Memory component – All the variables, function and parameter are stored as a key value pair. Memory component also known as “variable environment”.

* Code component- This is the place where code is executed one line at the time and assigning the values to the variable and execute the function calls. Also when function invoke JS engine created the new execution context. It is also known as the “Thread of execution.”

        Memory	                                                    Code
        Key: value
        a:10
        fn: {
            }
	

What is call stack in JS?
--------------------------------
* Call stack maintains the order of execution of execution contexts.
* It also known as – Execution context stack, program stack, control stack, runtime stack, machine stack.
* Its also follow LIFO (last in , first out) structure, which is used to store all the execution context created during the code execution.
* By Default JS engin/browser created Global execution content but when we call the code/Whenever function is invoke/ Function is executed, New execution context is created.


Diff between undefined and Null?
-----------------------------------

Shortest JavaScript Program i.e., Empty file 
-----------------------------------

What is window in JS?
-----------------------------------

Difference between undefined and not define?
-----------------------------------

JS is loosely typed language or weakly typed lang?
-----------------------------------

Scope Chain?
-----------------------------------





