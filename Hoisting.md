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


What is call stack in JS?
--------------------------------
* Call stack maintains the order of execution of execution contexts.
* It also known as – Execution context stack, program stack, control stack, runtime stack, machine stack.
* Its also follow LIFO (last in , first out) structure, which is used to store all the execution context created during the code execution.
* By Default JS engin/browser created Global execution content but when we call the code/Whenever function is invoke/ Function is executed, New execution context is created.




