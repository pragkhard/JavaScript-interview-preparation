JavaScript Interview Questions That Trick Even Seniors 
=========================================================

                            console.log([1, 2] + [3, 4]);
                            console.log((1, 2, 3));

                            First output: "1,23,4"
                            Second output: 3 


1. Adding two arrays
console.log([1, 2] + [3, 4]);

Explanation:
JavaScript converts both arrays into strings.
[1, 2] becomes "1,2".
[3, 4] becomes "3,4".
The + operator concatenates the strings.
Final result: "1,23,4".


2. Comma Operator
console.log((1, 2, 3));

Explanation:
The comma operator evaluates all expressions from left to right.
It returns only the last expression's value.
Therefore, the output is 3.