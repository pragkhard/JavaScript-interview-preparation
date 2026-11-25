Mutable vs Immutable
=======================

-----------------------------------------------------------------
1. First Interview Question – Can We Modify an Array Element?
------------------------------------------------------------------

Question: What will be the output of the following code?

                        let arr = [10, 20, 30];
                        console.log(arr[0]);
                        Output:
                        10

Explanation:
- We have an array containing three elements: 10, 20, and 30.
- Array indexing starts from 0.
- Therefore, arr[0] accesses the first element, which is 10.

Now, let's modify the first element.

                        let arr = [10, 20, 30];
                        arr[0] = 50;
                        console.log(arr[0]);
                        Output:
                        50


Explanation:
-------- -----
In JavaScript, arrays are mutable, which means we can modify their elements after creating them.

Here:
- Initially, arr[0] contains 10.
- We assign 50 to arr[0].
- The original array is updated.
- Therefore, the output is 50.
The updated array becomes:
[50, 20, 30]

--------------------------------------------------------------------
2. Second Interview Question – Can We Modify a String Character?
--------------------------------------------------------------------
Now, instead of an array, let's work with a string.

Question: What will be the output of the following code?


                    let str = "Hello";
                    console.log(str);
                    Output:
                    Hello


There is nothing surprising here. We simply print the string, so the output is Hello.

Now, let's access its first character.

                    let str = "Hello";
                    console.log(str[0]);

                    Output:
                    H


Explanation:
- The string is "Hello".
- String indexing also starts from 0.
- Therefore, str[0] returns the first character, which is H.

-------------------------------------------------------------------------------
3. Tricky Interview Question – What Happens When We Modify a String Character?
--------------------------------------------------------------------------------
Now comes the important part of the video.
What will happen if we try to change the first character of the string from H to A?

Code:
                        let str = "Hello";

                        str[0] = "A";

                        console.log(str);
                        console.log(str[0]);


                        Output
                        Hello
                        H


Why does the output remain unchanged?
The reason is that strings are immutable in JavaScript.
Immutable means that once a string is created, its individual characters cannot be modified directly.

Let's understand what happens:
---------------------------- --
1. Initially, str contains "Hello".
2. str[0] accesses the first character, which is H.
3. We try to replace H with A using str[0] = "A".
4. JavaScript does not allow direct modification of a string character.
5. Therefore, the original string remains "Hello".
That's why str[0] still returns H.
4. How Can We Actually Change a String?
Although strings are immutable, we can create a new string with the desired changes.

For example, we can use the replace() method.


                        let str = "Hello";
                        str = "A" + str.slice(1);
                        console.log(str);

                        Output:
                        Aello


Explanation:
- str.slice(1) returns "ello".
- "A" + "ello" creates a new string "Aello".
- We assign this new string to the str variable.
Notice that we did not modify the original string character. We created a new string and reassigned the variable.

------------------------------------------
5. Difference Between Arrays and Strings
-------------------------------------------
- Feature	                               ->             Array	           ->     String
- Mutability	                           ->            Mutable	       ->         Immutable
- Direct                                   ->       element modification	->      Allowed	Not allowed
- Indexing	                               ->            Starts from 0	   ->         Starts from 0
- Can access individual elements	       ->                   Yes	       ->             Yes
- Can update individual elements directly	->                 Yes	       ->              No

Compare both examples
-------------------- --
Array – Mutable
                    let arr = [10, 20, 30];
                    arr[0] = 50;
                    console.log(arr);

                    Output: [50, 20, 30]

The original array is modified.


String – Immutable

                    let str = "Hello";
                    str[0] = "A";
                    console.log(str);

                    Output: "Hello"

The original string remains unchanged.

------------------------------------------
6. Important JavaScript Interview Concepts
----------------------------------------------

1. Mutable: An object or value whose contents can be changed after creation. Arrays and objects are mutable.
2. Immutable: A value that cannot be changed after creation. Strings, numbers, and Booleans are primitive values and are immutable.
3. Array indexing: Array elements can be accessed and modified using their indexes.
4. String indexing: Individual characters can be accessed using indexes, but they cannot be reassigned directly.
5. Reassignment: We can assign a completely new string to a variable declared with let, even though strings themselves are immutable.

-----------------------------
7. Final Interview Takeaway
--------------------------------
Remember these two important points:
- Arrays are mutable: You can directly modify their elements using indexes.
- Strings are immutable: You cannot directly modify individual characters using indexes.

The most important interview example to remember is:
                  
                    let arr = [10, 20, 30];
                    arr[0] = 50;
                    console.log(arr[0]); // 50

                    let str = "Hello";
                    str[0] = "A";
                    console.log(str[0]); // H


Interview tip: If an interviewer asks why an array element can be modified but a string character cannot, explain the concepts of mutability and immutability. Also mention that creating a new string and reassigning it is allowed.