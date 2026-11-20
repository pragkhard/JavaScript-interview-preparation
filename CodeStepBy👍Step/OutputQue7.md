Break Nested Array Reference in JavaScript 🔥 | Spread Operator Trick 
=========================================================================

1. Problem with Normal Arrays
------------------------------

                            const x = [1, 2, 3];
                            const y = x;
                            y.push(4);
                            console.log(x); // [1, 2, 3, 4]


Why?
- y = x does not create a new array.
- Both variables point to the same memory reference.
- Therefore, modifying y also changes x.

-----------------------------------------------
2. Using the Spread Operator with Normal Arrays
------------------------------------------------

                            const x = [1, 2, 3];
                            const y = [...x];
                            y.push(4);
                            console.log(x); // [1, 2, 3]
                            console.log(y); // [1, 2, 3, 4]


Here, the spread operator creates a new array. Therefore, changes to y do not affect x.

--------------------------------
3. Problem with Nested Arrays
--------------------------------

Now consider a nested array:
                                const x = [
                                [1, 2, 3],
                                [4, 5, 6]
                                ];

                                const y = [...x];

                                y[0].push(4);

                                console.log(x);


                                Output:
                                [
                                [1, 2, 3, 4],
                                [4, 5, 6]
                                ]


-------------------------
Why does this happen?
 --------------------------

The spread operator creates a new outer array, but the inner arrays still share their original memory references.
This is called a Shallow Copy.

-------------------------------
4. How to Fix This Problem?
--------------------------------

The video explains two approaches.

----------------------------------------------------------------
Method 1: Manually use the spread operator on each nested array
 ----------------------------------------------------------------

                                const x = [
                                [1, 2, 3],
                                [4, 5, 6]
                                ];

                                const y = [
                                [...x[0]],
                                [...x[1]]
                                ];

                                y[0].push(7);

                                console.log(x); // [[1, 2, 3], [4, 5, 6]]
                                console.log(y); // [[1, 2, 3, 7], [4, 5, 6]]


---------------------------------------------
Method 2: Use map() with the spread operator
 -----------------------------------------------

                                const x = [
                                [1, 2, 3],
                                [4, 5, 6]
                                ];


                                const y = x.map(item => [...item]);

                                y[0].push(7);

                                console.log(x); // [[1, 2, 3], [4, 5, 6]]
                                console.log(y); // [[1, 2, 3, 7], [4, 5, 6]]


Here, map() creates a new outer array, and [...item] creates a new copy of each inner array.

------------------------------------
5. Important Interview Concepts
------------------------------------
- Concept    	            -            Meaning
- Reference	                -            Variables point to the same array in memory
- Spread Operator	        -            Creates a shallow copy
- Shallow Copy	            -            Copies the outer array, but nested references remain shared
- Nested Array	            -            An array containing other arrays
- map()	                    -            Creates a new array by transforming each element
- Deep Copy     	        -            Creates independent copies of nested objects and arrays

Important interview takeaway: The spread operator alone does not completely break references in nested arrays. You must also copy the inner arrays.

Remember:
- Normal array → [...x]
- Nested array → x.map(item => [...item])
- For deeply nested structures, use an appropriate deep-copy approach, such as structuredClone(x) when supported.
This is a common JavaScript interview topic, especially for understanding shallow copy and deep copy.