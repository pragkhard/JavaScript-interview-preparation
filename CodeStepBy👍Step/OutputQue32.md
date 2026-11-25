99% Developers Get This JavaScript Hoisting Question Wrong 
============================================================

-----------------------
1. Interview Question
-----------------------
What will be the output of the following JavaScript code? Explain why.
                            var num = 10;

                            function fun() {
                                console.log(num);

                                var num = 20;

                                console.log(num);
                            }

                            fun();


Before reading the explanation, try to predict the output.

Will it print:
- 10 and 20
- undefined and 20
- 10 and 10
- Or will it throw an error?

----------------------
2. Expected Output
----------------------
                            Correct Answer: undefined, 20
                            undefined
                            20


Let's understand why the first output is undefined instead of 10.

----------------------------
3. Step-by-step explanation
------------------------------

Step 1: Declare a global variable
-------------------------------- --
var num = 10;

Here, we declare a variable named num outside the function and assign it the value 10.
This variable is available in the global scope.

Step 2: Create a function
-------------------------- -

                            function fun() {
                                console.log(num);

                                var num = 20;

                                console.log(num);
                            }


Inside the function, we declare another variable with the same name, num, using the var keyword.
This creates a separate function-scoped variable that is different from the global num.

Step 3: First console.log()
--------------------------- ---
                                console.log(num);

                                Output:
                                undefined


Why does it print undefined instead of 10?
The reason is JavaScript Hoisting.
When JavaScript executes a function, declarations made using var are hoisted to the top of their function scope.

Internally, JavaScript treats the function approximately like this:

                        function fun() {
                            var num;            // Declaration is hoisted

                            console.log(num);   // undefined

                            num = 20;           // Value assignment happens here

                            console.log(num);   // 20
                        }


Notice that the local variable num is declared at the beginning of the function, but its value is not assigned until the original assignment statement executes.
Therefore, when the first console.log(num) runs, JavaScript finds the local variable num, whose value is currently undefined.
It does not access the global variable containing 10.

Step 4: Second console.log()
-------------------------- --
                            var num = 20;
                            console.log(num);

                            Output:
                            20

Here, the local variable has already been assigned the value 20.
Therefore, the second console.log() prints 20.

-------------------------------------------------
4. Why doesn't the global variable get printed?
-------------------------------------------------
This concept is called Variable Shadowing.
When a local variable has the same name as a global variable, the local variable takes precedence inside its own scope.

In this example:
- Global num = 10
- Local num = 20 (inside the function)

Inside the function, JavaScript finds the local num first.
Therefore, the global variable is shadowed by the local variable.
Understanding variable scope

GLOBAL SCOPE
var num = 10
The global variable retains its value of 10.

FUNCTION SCOPE – fun()

var num = 20
console.log(num) → undefined
console.log(num) → 20
The local variable shadows the global variable.

-----------------------------------------------------------------
5. What happens if we remove the var keyword inside the function?
----------------------------------------------------------------
The instructor demonstrates another important scenario.
Modified code:

                            var num = 10;

                            function fun() {
                                console.log(num);

                                num = 20;

                                console.log(num);
                            }

                            fun();

                            console.log(num);


                            Output:
                            10
                            20
                            20


Explanation:
------------ -

This time, we have removed var from the statement num = 20.
Therefore, JavaScript does not create a new local variable.
Instead, it accesses the existing global variable and updates its value.

Execution happens as follows:
1. Global num is initially 10.
2. The function accesses the global num and prints 10.
3. The statement num = 20 updates the global variable.
4. The second console prints 20.
5. Outside the function, the global variable also contains 20.
This is why the final output is 20.
6. Check the global variable after calling the function
The instructor also demonstrates that declaring a local variable with the same name does not change the global variable.

                                    var num = 10;

                                    function fun() {
                                        console.log(num);

                                        var num = 20;

                                        console.log(num);
                                    }

                                    fun();

                                    console.log(num);


                                    Output:
                                    undefined
                                    20
                                    10


The last output is 10 because the local variable exists only inside the function. It does not modify the global variable.

-------------------------------------------
7. Important JavaScript interview concepts
--------------------------------------------
- Concept	                  ->                      Explanation
- Hoisting	                  ->              Variable declarations are processed before code execution within their scope.
- var	                      ->              Has function scope.
- Variable shadowing	      ->              A local variable with the same name takes precedence over the outer variable.
- undefined	                  ->              A hoisted var variable has an initial value of undefined until assigned.
- Global scope	              ->              Variables declared outside a function can be accessed inside it unless shadowed.

----------------------------
8. Final Interview Takeaway
-----------------------------
Remember these three important points:
1. When you declare a local variable using var with the same name as a global variable, the local variable shadows the global variable.
2. Due to hoisting, the local variable declaration moves to the top of the function scope, but its assignment remains in its original position.
3. If you remove var and simply write num = 20, JavaScript updates the existing global variable (assuming non-strict mode and no other binding).

Interview tip: Do not confuse hoisting with initialization. var declarations are hoisted and initialized with undefined, but their assigned values are not moved to the top.