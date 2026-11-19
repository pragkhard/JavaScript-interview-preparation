JavaScript Tricky Arithmetic Interview Questions 🤯 
====================================================

                        console.log(5 + "5");
                        console.log(5 - "2");
                        console.log("2" * "5");
                        console.log("5" + 2 - 1);
                        console.log(10 / 0);
                        console.log(+"5");
                        console.log(5 + +"5");
                        console.log("5" - -"2");
                        console.log(0.1 + 0.2 === 0.3);


------------------------------------------------------------------------------------------------
Q1. What is the output?
console.log(5 + "5");

Answer: "55" – JavaScript converts the number 5 into a string and concatenates both values.

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q2. What is the output?
console.log(5 - "2");

Answer: 3 – The subtraction operator converts the string "2" into a number. so the and is 3

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q3. What is the output?
console.log("2" * "5");

Answer: 10 – Both strings are converted into numbers before multiplication.

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q4. What is the output?
console.log("5" + 2 - 1);

Answer: 51
- "5" + 2 → "52" (string concatenation).
- "52" - 1 → 51 (numeric conversion).

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q5. What is the output?
console.log(10 / 0);

Answer: Infinity – JavaScript returns Infinity for positive numeric division by zero.

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q6. What is the output?
console.log(+"5");

Answer: 5 – The unary plus operator converts the numeric string into a number.

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q7. What is the output?
console.log(5 + +"5");

Answer: 10
- +"5" → 5.
- 5 + 5 → 10.

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q8. What is the output?
console.log("5" - - "2");

Answer: 7 – Subtracting a negative number is equivalent to addition.

------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------

Q9. What is the output?
console.log(0.1 + 0.2 === 0.3);

Answer: false – JavaScript uses IEEE 754 floating-point representation, which can cause decimal precision issues.
0.1 + 0.2
// 0.30000000000000004

------------------------------------------------------------------------------------------------


The actual reason:-

Computers store numbers in binary (0s and 1s), not exactly like the decimal numbers we write.
Some decimal numbers, such as 0.1 and 0.2, cannot be stored exactly in binary.

Think of it like this:
- 0.1 is stored as a very slightly different number.
- 0.2 is also stored as a very slightly different number.
- When JavaScript adds them, the tiny differences appear in the result.
That's why we get 0.30000000000000004 instead of exactly 0.3.
