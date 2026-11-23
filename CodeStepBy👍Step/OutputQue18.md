 JavaScript Array Tricks Every Developer Must Know
 ==================================================


 In this video, the speaker discusses three main JavaScript interview questions and one bonus question.
- Two questions are related to JavaScript best practices.
- One question is a little tricky.
- The bonus question asks you to explain why two similar-looking declarations behave differently.
Let's understand all four questions in the same sequence as the video.

-------------------------------------------------------------------------
1. First question – Assign array values to multiple variables in one line
-------------------------------------------------------------------------
Suppose we have an array called numArray1 containing three values.

                    let numArray1 = [10, 20, 30];

                    let a = numArray1[0];
                    let b = numArray1[1];
                    let c = numArray1[2];

                    console.log(a);
                    console.log(b);
                    console.log(c);


                    Output:
                    10
                    20
                    30


Here, we are accessing each array element separately using its index.

The interviewer asks:
------------ -----------
Is there a shorter way to assign all the array values to different variables in a single line?

Yes! We can use Array Destructuring.
Solution: Using array destructuring

Instead of assigning each value separately, write:

                    let numArray1 = [10, 20, 30];

                    let [a, b, c] = numArray1;

                    console.log(a);
                    console.log(b);
                    console.log(c);


                    Output:
                    10
                    20
                    30


How does it work?
JavaScript automatically assigns array elements to variables according to their positions.


- Array element	             ->           Variable	                  ->                 Assigned value
- numArray1[0]	             ->           a	                          ->                     10
- numArray1[1]	             ->           b	                          ->                     20
- numArray1[2]	             ->           c	                          ->                     30

Important: Array destructuring assigns values based on their positions, not their names.
This makes the code shorter and easier to read.

--------------------------------------------------
2. Second question – How to combine two arrays?
--------------------------------------------------

Suppose we have two arrays:
let numArray1 = [10, 20, 30];
let numArray2 = [40, 50, 60];


The interviewer asks:
-------------------- -
How can you combine these two arrays efficiently using minimum code?
The speaker first explains the concat() method.

---------------------------
Solution 1: Using concat()
------------- --------------

                let combine = numArray1.concat(numArray2);

                console.log(combine);

                Output:
                [10, 20, 30, 40, 50, 60]


How does concat() work?
The concat() method combines two or more arrays and returns a new array.

Here:
- numArray1 contains [10, 20, 30].
- numArray2 contains [40, 50, 60].
- concat() combines both arrays into one new array.
The original arrays remain unchanged.

---------------------------------------------------------------------------
3. Third question – Can we combine two arrays using the spread operator?
-----------------------------------------------------------------------------

The interviewer asks another question:
Can we combine two arrays using the spread operator instead of concat()?
Yes! We can use the JavaScript Spread Operator (...).

Solution 2: Using the spread operator
------------------------------------ -

                let numArray1 = [10, 20, 30];
                let numArray2 = [40, 50, 60];

                let combine = [...numArray1, ...numArray2];

                console.log(combine);

                Output:
                [10, 20, 30, 40, 50, 60]


How does the spread operator work?
The spread operator (...) expands the elements of an array.

Let's understand:
[...numArray1]


It expands the first array:
[10, 20, 30]


Similarly:
[...numArray2]


It expands the second array:
[40, 50, 60]


When we write:
[...numArray1, ...numArray2]


JavaScript combines all the elements into a new array.

Important: Both concat() and the spread operator create a new array. Neither modifies the original arrays.

-------------------------------------------------------------------
4. Fourth question – How to remove duplicate values from an array?
---------------------------------------------------------------------
Now, the speaker introduces a slightly tricky question.

Suppose we have an array containing duplicate values:
let numArray = [10, 20, 30, 40, 8, 8, 50];

As you can see, the value 8 appears twice.

The interviewer asks:
How can we remove duplicate values from an array?

The speaker uses the JavaScript Set object along with the spread operator.

Solution: Using Set and spread operator

                let numArray = [10, 20, 30, 40, 8, 8, 50];

                let uniqueArray = [...new Set(numArray)];

                console.log(uniqueArray);


                Output:
                [10, 20, 30, 40, 8, 50]


Duplicates removed

How does this work?
------------------- --
Let's understand the code step by step.

------------------------
Step 1: Create a Set
-------------------- --
new Set(numArray);

A Set is a JavaScript data structure that stores unique values.

If we pass this array:
[10, 20, 30, 40, 8, 8, 50]

The Set stores:
10, 20, 30, 40, 8, 50

The duplicate 8 is automatically removed.

-------------------------------------------
Step 2: Convert the Set back into an array
-------------------------------------- ---

[...new Set(numArray)]

The spread operator extracts the unique values from the Set and places them inside a new array.

Final result:
[10, 20, 30, 40, 8, 50]


Important: A Set preserves the insertion order of its values. It removes duplicates based on value equality using SameValueZero comparison.

---------------------------------------------------------------
5. Bonus question – Difference between let and not using let
---------------------------------------------------------------

This is the bonus question that the speaker asks viewers to answer in the comments.

In the earlier example, we declared three variables using array destructuring:
let [a, b, c] = numArray1;


The speaker demonstrates that the code also appears to work when let is removed:
[a, b, c] = numArray1;


------------------------
The interviewer asks:
-------- ------------------

What is the difference between using let and not using let when declaring variables through array destructuring?

Let's understand the important difference.

---------------------
Case 1: Using let
----------- --------

                let [a, b, c] = [10, 20, 30];

                console.log(a, b, c);

                Output:
                10 20 30

                Here, let declares three block-scoped variables.

----------------------
Case 2: Without let
-------------- ----------

                [a, b, c] = [10, 20, 30];


This is not a variable declaration. It is an assignment to existing variables.

If a, b, and c have not already been declared, the result depends on the execution environment:
- In strict mode, JavaScript throws a ReferenceError because the variables are not declared.
- In a non-strict classic script, assigning to undeclared identifiers may create global variables.
- In ES modules and JavaScript class code, strict mode applies automatically.
Therefore, you should not remove let, const, or var when declaring new variables.

Best practice: Always declare your variables explicitly.
let [a, b, c] = [10, 20, 30];

------------------------------------------------
6. Complete revision – All JavaScript concepts
------------------------------------------------

Interview question	                          ->    JavaScript concept	                ->                    Solution
Assign array values to multiple variables	  ->    Array destructuring	                ->                let [a, b, c] = arr
Combine two arrays	                          ->            concat()	                ->                arr1.concat(arr2)
Combine two arrays using                      ->            spread	                    ->            Spread operator	[...arr1, ...arr2]
Remove duplicate values	                      ->            Set + spread	            ->            [...new Set(arr)]
Difference between declaration and assignment ->	    let and destructuring	        ->                let [a,b] = arr

---------------------------------------
7. Practice questions for interviews
----------------------------------------

Question 1: What will be the output?
------------------ ------------------

                    let arr = [10, 20, 30, 40];

                    let [a, b, ...rest] = arr;

                    console.log(a);
                    console.log(b);
                    console.log(rest);


Question 2: Combine three arrays using the spread operator.
------------------------- ---------------------------------

                    let arr1 = [1, 2];
                    let arr2 = [3, 4];
                    let arr3 = [5, 6];


                    Expected output:
                    [1, 2, 3, 4, 5, 6]


                    Question 3: Remove duplicate values from this array:
                    let arr = [1, 2, 3, 2, 4, 1, 5];


                    Expected output:
                    [1, 2, 3, 4, 5]


Question 4: What happens when you assign values using [a, b] = [10, 20] without declaring a and b first?
------------------------------------------------ ----------------------------------------------------------
Final interview takeaway: The most important concepts from this video are array destructuring, the spread operator, concat(), Set, and the difference between variable declaration and assignment. These are commonly used in modern JavaScript and React development.