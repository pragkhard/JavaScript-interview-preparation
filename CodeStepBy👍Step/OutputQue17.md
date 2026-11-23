 Swap Two Variables Without Third Variable 
 ===========================================

 In this video, the speaker explains two ways to swap the values of two variables without using a third variable:
1. Using our own mathematical logic.
2. Using JavaScript's built-in functionality (array destructuring).
1. Understand the interview question

                Suppose we have two variables, a and b.
                let a = 10;
                let b = 20;


                We need to swap their values.

                This means:
                - The value of a should become 20.
                - The value of b should become 10.

                Expected output:
                a = 20;
                b = 10;


Condition: We must swap the values without creating a third variable.

---------------------------------------------------------------------
2. First approach – Using our own logic (Addition and Subtraction)
---------------------------------------------------------------------

The speaker first explains how to swap two variables using mathematical operations.

Initially:
let a = 10;
let b = 20;


Step 1: Add both values and store the result in b.
------------------------------------------------ ---

b = a + b;

Now:
- a = 10
- b = 10 + 20 = 30
So, the values become:
a = 10;
b = 30;


Step 2: Subtract a from b and store the result in a.
------------------------------------------------ ---

a = b - a;

Now:
- b = 30
- a = 30 - 10 = 20

So, the values become:
a = 20;
b = 30;


Step 3: Subtract the new value of a from b.
------------------------------------------------ ---

b = b - a;

Now:
- b = 30 - 20 = 10
- a = 20
Final values:
a = 20;
b = 10;


Values swapped successfully
Complete code – First approach

let a = 10;
let b = 20;

b = a + b;
a = b - a;
b = b - a;

console.log("a =", a);
console.log("b =", b);

Output:
a = 20
b = 10


Understand the execution step by step

- Step	      ->      Operation	             ->           a	        ->         b
- Initial	  ->          —	                 ->           10	    ->        20
- 1	          ->      b = a + b	             ->           10	    ->        30
- 2	          ->      a = b - a	             ->           20	    ->        30
- 3	          ->      b = b - a	             ->           20	    ->        10

How does this logic work?
We temporarily store the sum of both values in b. Then, using subtraction, we recover the original values in reverse order.
This approach works for JavaScript numbers, provided the arithmetic does not overflow into Infinity or lose precision.


--------------------------------------------------------------
3. Second approach – Using JavaScript array destructuring
--------------------------------------------------------------

Now the speaker explains a shorter solution using JavaScript's built-in functionality.
We can use array destructuring to swap two variables without creating a separate temporary variable.

Initially:
let a = 10;
let b = 20;


Write:
[a, b] = [b, a];


That's it!

Now the values are swapped:
a = 20;
b = 10;

Complete code – Second approach

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);

Output:
a = 20
b = 10


How does array destructuring work?
Let's understand this statement:
[a, b] = [b, a];


The right-hand side is evaluated first:
[b, a]


Since:
a = 10;
b = 20;


The right-hand side produces:
[20, 10]


Then JavaScript assigns these values to the variables on the left:
a = 20;
b = 10;


Therefore, the values are swapped.

Important: JavaScript evaluates the right-hand side before assigning the values on the left. This allows us to swap the variables without manually creating a third variable.

---------------------------------------
4. Difference between both approaches
--------------------------------------

- Feature	          ->          Addition and subtraction	                     ->             Array destructuring
- Logic	              ->          Mathematical operations	                     ->                  JavaScript syntax
- Code	              ->              Three statements	                         ->              One statement
- Third variable	  ->              Not required	                             ->              Not required explicitly
- Readability	      ->          Requires understanding the logic	             ->              Simple and readable
- Best use	          ->          Interview logic practice	                     ->              Practical JavaScript code

-----------------------------------
5. Important interview takeaways
-----------------------------------
Remember these two solutions:

Method 1 – Without a third variable:
b = a + b;
a = b - a;
b = b - a;


Method 2 – Using array destructuring:
[a, b] = [b, a];


The second approach is generally preferred in modern JavaScript because it is shorter, cleaner, and easier to understand.

------------------------------------
6. Interview question for practice
--------------------------------------

Question: Given two variables a and b, write a JavaScript program to swap their values without using a third variable.

Input:
let a = 10;
let b = 20;


Expected output:
a = 20;
b = 10;


Follow-up interview questions:
1. Can you swap two variables using addition and subtraction?
2. Can you swap two variables using array destructuring?
3. What is array destructuring in JavaScript?
4. Can you swap two variables without using a temporary variable and without using arithmetic operators?
My recommendation: Learn both approaches. The arithmetic approach helps demonstrate your problem-solving skills, while array destructuring demonstrates your understanding of modern JavaScript.