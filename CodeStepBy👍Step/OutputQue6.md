Break Nested Array Reference in JavaScript 🔥 | Spread Operator Trick 
=======================================================================


                                    const x = [1, 2, 3];
                                    const y = x;
                                    y.push(4);
                                    console.log(x);

                                    Output: [1, 2, 3, 4]


Why does this happen?
- First, an array [1, 2, 3] is created and stored in memory.
- y = x does not create a new array.
- Both x and y point to the same array in memory.
- When you add 4 using y.push(4), the original array also changes.


Memory concept

----------------

                    -x                                                     - y

                                        Same array in memory
                                        [1, 2, 3, 4]


2. How to Prevent This Problem?
==================================

The video explains three ways to create a separate array.

Method 1: Spread Operator
 --------------------------

                                    const x = [1, 2, 3];
                                    const y = [...x];
                                    y.push(4);

                                    console.log(x); // [1, 2, 3]
                                    console.log(y); // [1, 2, 3, 4]



Method 2: Array.from() / Object.assign()
 -----------------------------------------     

                                    The video demonstrates Object.assign():
                                    const x = [1, 2, 3];

                                    const y = Object.assign([], x);

                                    y.push(4);

                                    console.log(x); // [1, 2, 3]
                                    console.log(y); // [1, 2, 3, 4]


Method 3: slice()
 ----------------------

                                    const x = [1, 2, 3];
                                    const y = x.slice();
                                    y.push(4);

                                    console.log(x); // [1, 2, 3]
                                    console.log(y); // [1, 2, 3, 4]



3. Important Interview Concepts
----------------------------------
Concept	Explanation
Array Reference	Multiple variables can point to the same array
Memory Sharing	Changes through one reference affect the same array
Spread Operator	Creates a shallow copy of an array
Object.assign()	Copies array elements into a new array
slice()	Creates a shallow copy of an array
Shallow Copy	Creates a new outer array, but nested objects remain shared

Important interview point: const prevents reassignment of the variable, but it does not prevent modification of the array.

For example:

                                    const x = [1, 2, 3];
                                    x.push(4); // Allowed
                                    // x = [5, 6]; // Error


Remember: const y = x shares the same array reference, whereas const y = [...x] creates a new shallow copy.
