JavaScript Tricky Interview Question Explained
================================================

1.

                            console.log(1 < 2 < 3);
                            console.log(3 > 2 > 1);

                            First output: true
                            Second output: false   


Explanation of the first expression: 
---------------------------------------
console.log(1 < 2 < 3); 

JavaScript evaluates this expression from left to right

Step 1: Compare 1 and 2.
1 < 2 // true

Step 2: Now the expression becomes:
true < 3

JavaScript converts the Boolean value true into the number 1 during numeric comparison.
1 < 3 // true

Final output: true


Explanation of the second expression:
-----------------------------------------
console.log(3 > 2 > 1);

Again, JavaScript evaluates the expression from left to right.

Step 1: Compare 3 and 2.
3 > 2 // true

Step 2: Now the expression becomes:
true > 1

JavaScript converts true into the number 1.
1 > 1 // false

Final output: false