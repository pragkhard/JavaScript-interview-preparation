JavaScript Assignment Operator Tricky Interview Questions
==========================================================

                                let a = 3;
                                let b = a++;
                                console.log(b); // 3
                                console.log(a); // 4


                                let a = 1;
                                a = a++ + ++a;
                                console.log(a); // 4


                                let a = [1, 2];
                                let b = a;
                                b += 3;
                                console.log(b); // "1,23"


1. Assignment and Post-Increment
----------------------------------

let a = 3;
let b = a++;
console.log(b); // 3
console.log(a); // 4

Explanation:
- a++ is a post-increment operator.
- First, the current value of a (3) is assigned to b.
- Then a is incremented to 4.
Output: b = 3, a = 4.


2. Pre-Increment and Post-Increment
---------------------------------------

let a = 1;
a = a++ + ++a;
console.log(a); // 4

Explanation:
- a++ returns 1, then increments a to 2.
- ++a increments a to 3, then returns 3.
- Addition: 1 + 3 = 4.
- The final result is assigned to a.
Output: 4.

3. Addition Assignment Operator with Arrays
--------------------------------------------

let a = [1, 2];
let b = a;
b += 3;
console.log(b); // "1,23"

Explanation:
- b += 3 is equivalent to b = b + 3.
- JavaScript converts the array [1, 2] into the string "1,2".
- It then concatenates "3" with "1,2".
Output: "1,23" (a string, not an array).



Important JavaScript Interview Concepts
-----------------------------------------

1. Post-Increment (a++): Returns the old value, then increments.
2. Pre-Increment (++a): Increments first, then returns the new value.
3. Assignment Operator (=): Assigns a value to a variable.
4. Addition Assignment (+=): Adds and assigns the result.
5. Type Coercion: JavaScript automatically converts values between data types.
6. String Concatenation: The + operator joins strings instead of performing numeric addition.