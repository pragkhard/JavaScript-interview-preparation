JavaScript Array Union Interview Question
===========================================

-----------------------
1. Interview Question
------------------------
Given two arrays, write a JavaScript program to find their union.
The union of two arrays means combining all elements from both arrays into a new array while removing duplicate values.

In simple words:
---------------- -
- Combine the elements of both arrays.
- Keep each unique element only once.
- Remove duplicate values, including values common to both arrays.

Example
                        Input:
                        const arr1 = [1, 2, 3, 4];
                        const arr2 = [3, 4, 5, 6];

                        Expected output:
                        [1, 2, 3, 4, 5, 6]


Explanation:
- Array 1 contains: [1, 2, 3, 4]
- Array 2 contains: [3, 4, 5, 6]
- The common elements are 3 and 4.
- We include these elements only once in the final array.
Therefore, the union is [1, 2, 3, 4, 5, 6].

------------------------------------------
2. Solution using for...of loop and object
---------------------------------------------

The video demonstrates an approach using:
- An empty array called union to store unique elements.
- An empty object called obj to track which elements have already been added.
- Two for...of loops to iterate through both arrays.

Code:
                        function findUnion(arr1, arr2) {
                            let union = [];
                            let obj = {};

                            // Loop through the first array
                            for (let item of arr1) {
                                union.push(item);
                                obj[item] = true;
                            }

                            // Loop through the second array
                            for (let item of arr2) {
                                if (!obj[item]) {
                                    union.push(item);
                                    obj[item] = true;
                                }
                            }

                            return union;
                        }

                        const arr1 = [1, 2, 3, 4];
                        const arr2 = [3, 4, 5, 6];

                        console.log(findUnion(arr1, arr2));


                        Output:
                        [1, 2, 3, 4, 5, 6]


----------------------------
3. Step-by-step explanation
----------------------------
Let's understand the logic in detail.

Step 1: Create an empty array and object
----------------- ------------------------
let union = [];
let obj = {};


- union stores the final unique elements.
- obj keeps track of elements that have already been added.
Initially:
union = [];
obj = {};

-----------------------------------------
Step 2: Iterate through the first array
----------------- ------------------------

for (let item of arr1) {
    union.push(item);
    obj[item] = true;
}


We iterate through the first array and push all its elements into the union array.
At the same time, we store every element as a key in the object and assign its value as true.

After this loop:
union = [1, 2, 3, 4];

obj = {
    1: true,
    2: true,
    3: true,
    4: true
};

-----------------------------------------
Step 3: Iterate through the second array
----------------- ------------------------

for (let item of arr2) {
    if (!obj[item]) {
        union.push(item);
        obj[item] = true;
    }
}


Now we iterate through the second array.

Before adding an element to the union array, we check whether it already exists in the object.
- If the element already exists, we do nothing.
- If the element does not exist, we push it into the union array and mark it as true in the object.
Let's understand each iteration:
Element	Already exists in object?	Action
3	Yes	Skip
4	Yes	Skip
5	No	Push 5
6	No	Push 6

After the second loop:
union = [1, 2, 3, 4, 5, 6];

------------------------------
Step 4: Return the final array
------------------------------ -
return union;


Finally, the function returns the union array containing all unique elements from both arrays.

----------------- ------------------------
4. Alternative solution using Set()
----------------- ------------------------
JavaScript provides a built-in data structure called Set, which automatically stores only unique values.
We can solve the same problem in a single line:

                function findUnion(arr1, arr2) {
                    return [...new Set([...arr1, ...arr2])];
                }

                const arr1 = [1, 2, 3, 4];
                const arr2 = [3, 4, 5, 6];

                console.log(findUnion(arr1, arr2));


                Output:
                [1, 2, 3, 4, 5, 6]


                Let's understand the code:
                [...arr1, ...arr2]


                Combines both arrays:
                [1, 2, 3, 4, 3, 4, 5, 6]


                new Set([...arr1, ...arr2])


                Removes duplicate values:
                Set(6) {1, 2, 3, 4, 5, 6}


                [...new Set([...arr1, ...arr2])]

                Converts the Set back into an array:
                [1, 2, 3, 4, 5, 6]

---------------------------------
5. Important JavaScript concepts
----------------------------------
- Concept	                  ->              Explanation
- for...of	                  ->              Iterates over array values
- push()	                  ->              Adds an element to the end of an array
- Object	                  ->              Stores elements as keys to track whether they have been added
- if (!obj[item])	          ->              Checks whether an element has not been marked as present
- Set()         	          ->              Stores only unique values
- Spread operator (...)	      ->              Expands array elements into another array

---------------------------
6. Time and Space Complexity
----------------------------------
For the Set solution:
- Time Complexity: Approximately \(O(n+m)\), where n and m are the lengths of the two arrays.
- Space Complexity: \(O(n+m)\) for storing the combined unique elements.
The object-based solution also has average \(O(n+m)\) time complexity for ordinary numeric or string array elements.

Important correction to the video: The first loop pushes every element of the first array without checking for duplicates. Therefore, the video’s implementation does not remove duplicates that already exist within the first array itself.

For example:
                        arr1 = [1, 2, 2, 3];
                        arr2 = [3, 4, 4, 5];


                        The video approach would produce:
                        [1, 2, 2, 3, 4, 5]


                        But the correct union is:
                        [1, 2, 3, 4, 5]


The Set solution handles duplicates in both arrays correctly.

------------------------------
7. Final Interview Takeaway
------------------------------
Remember these two approaches:

Approach 1: Using loops and an object – demonstrates your understanding of loops, arrays, objects, and conditional checks.

Approach 2: Using Set() – shorter and cleaner modern JavaScript solution.

For interviews, explain the loop-based approach first, then demonstrate the Set approach as an alternative.