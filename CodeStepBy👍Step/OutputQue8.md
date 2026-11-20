JavaScript Ternary Operator Trick 
===================================


                            console.log(true ? false ? "A" : "B" : "C");


                            What will be the output?
                            - A
                            - B
                            - C
                            Correct answer: B

-----------------------                            
2. How does it work?
-----------------------

The important concept is that the ternary operator (? :) is right-associative. This means the expression is grouped from right to left.

Let's break it down:

---------------------------------------------------
Step 1: Evaluate the right-side ternary operator.
 --------------------------------------------------

                            false ? "A" : "B"


The condition is false, so JavaScript selects the value after the colon.

Result: "B"

---------------------------------------------------
Step 2: Evaluate the left-side ternary operator.
 ---------------------------------------------------

Now the original expression becomes:

                            true ? "B" : "C"


The condition is true, so JavaScript selects the value after ?.
Result: "B"

----------------------
3. Final output
-----------------------

                            console.log(true ? false ? "A" : "B" : "C");

                            // Output: B


-------------------------------
4. Important interview concept
--------------------------------

Remember:
- The ternary operator is right-associative, not simply evaluated right-to-left in every respect.
- Parentheses can make nested ternary expressions easier to understand.

- The syntax is:
                            
                            condition ? expressionIfTrue : expressionIfFalse;


