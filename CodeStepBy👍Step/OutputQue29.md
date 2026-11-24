| Why is ‘b’ Global but ‘a’ Undefined?
======================================

-------------------------
1. Interview Question
---------------------------
What will be the output of the following JavaScript code? Explain why.

                        function checkOutput() {
                            var a = b = 3;

                            console.log(typeof a);
                            console.log(typeof b);
                        }

                        checkOutput();

                        console.log(typeof a);
                        console.log(typeof b);


Before reading the explanation, try to predict the output of all four console.log() statements.

---------------------
2. Expected Output
-------------------
                            number
                            number
                            undefined
                            number

Let's understand why JavaScript produces this output.

-----------------------------
3. Step-by-step explanation
-----------------------------

Step 1: Understand the variable declaration
------------------------------------------- --

Inside the function, we have:
var a = b = 3;

This statement is equivalent to:
var a = (b = 3);


JavaScript evaluates it from right to left.
- First, b = 3 assigns the value 3 to b.
- Since b is not declared using var, let, or const, it becomes a global variable in a non-strict environment.
- Then, the value of b is assigned to a.
- Variable a is declared using var, so it has function scope.
Therefore, both variables contain the value 3, but their scopes are different.

Step 2: First console.log()
----------------------------- -

                    console.log(typeof a);

                    Output:
                    number

Reason: Variable a is declared using var and has a value of 3. Therefore, its type is number.

Step 3: Second console.log()
---------------------------- --

                    console.log(typeof b);

                    Output:
                    number


Reason: Variable b is created without a declaration keyword. In a non-strict environment, it becomes a global variable and stores the value 3. Therefore, its type is also number.

Step 4: Third console.log() (Outside the function)
------------------------------------------------ ---

                    console.log(typeof a);

                    Output:
                    undefined


Reason: Variable a was declared using var inside the function.
Since var has function scope, variable a is accessible only inside checkOutput().
Outside the function, a is not accessible as a variable. However, typeof an undeclared identifier returns undefined instead of throwing a ReferenceError.

Step 5: Fourth console.log() (Outside the function)
-------------------------------------------------- ---

                    console.log(typeof b);

                    Output:
                    number


Reason: Variable b was assigned without a declaration keyword.
In a non-strict environment, this creates a global variable. Therefore, it remains accessible even outside the function.
Its value is still 3, so its type is number.

--------------------------------------
4. Visual comparison of both variables
---------------------------------------

- Property	                       ->           Variable a	              ->                      Variable b
- Declaration                      ->           	var a	              ->                  No declaration keyword
- Value	                           ->                 3	                  ->                          3
- Scope	                           ->         Function scope	          ->                Global scope (non-strict mode)
- Accessible inside function	   ->                 Yes	              ->                  Yes
- Accessible outside function      ->                  No	              ->                       Yes
- typeof outside function          ->           	"undefined"           ->              	  "number"

------------------------------------
5. What happens if we remove var?
--------------------------------------
Now, the instructor demonstrates another scenario.

Original code:

                        function checkOutput() {
                            var a = b = 3;

                            console.log(typeof a);
                            console.log(typeof b);
                        }

                        checkOutput();

                        console.log(typeof a);
                        console.log(typeof b);


If we remove var from the assignment and write:

                        function checkOutput() {
                            a = b = 3;

                            console.log(typeof a);
                            console.log(typeof b);
                        }

                        checkOutput();

                        console.log(typeof a);
                        console.log(typeof b);


                        Output in a non-strict environment:
                        number
                        number
                        number
                        number


Explanation:
---------- --
Now, neither a nor b is declared using var, let, or const.
Both assignments create global properties in a non-strict environment. Therefore, both variables are accessible inside and outside the function.

-------------------------------------------
6. Important JavaScript interview concepts
-----------------------------------------
Remember these rules:
- Keyword	                ->            Scope	                                  ->            Can be accessed outside its function?
- var	                    ->        Function scope	                          ->              No, if declared inside a function
- let	                    ->        Block scope                                 ->        	No, if declared inside a block
- const	                ->        Block scope	                              ->              No, if declared inside a block
- No declaration keyword	->    Creates global property in non-strict mode	  ->                      Yes

Important correction: The video refers to var as block-level scope, but that is technically incorrect. var has function scope, not block scope. Also, assigning a variable without a declaration keyword creates an implicit global only in non-strict mode. In strict mode ("use strict"), it throws a ReferenceError.

------------------------------
7. Final interview takeaway
----------------------------------
The most important concept in this question is understanding the difference between function-scoped variables and implicit global variables.
- var a inside a function is accessible only within that function.
- b = 3 without a declaration keyword creates a global property in non-strict mode.
- typeof an undeclared variable returns "undefined" rather than throwing an error.
Interview tip: Be careful with statements like var a = b = 3. Although they look like both variables are declared together, only a is declared using var.