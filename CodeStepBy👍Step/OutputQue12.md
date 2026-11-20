Flatten Nested Array in JavaScript | Logical Interview Question (No Inbuilt Function)
===========================================================================================

The task is to flatten the nested array.
Flattening means extracting all the elements from the inner arrays and placing them into one single array.

For example:

                                let data = [1, [2, 3], [4, [5, 6]], 7];

                                After flattening, the expected output is:
                                [1, 2, 3, 4, 5, 6, 7]


Understand the requirement:
--------------------------- --

There are two important conditions:
1. We cannot use any built-in JavaScript method such as flat().
2. The nested array can have any depth. It could have two, three, four, or even more levels.
So, we need to create a common function that can flatten an array regardless of its nesting depth.

----------------------------
Step 1 – Create a function
-------------------------- ---

First, create a function called flatten.
We will pass the nested array to this function.

                                function flatten(data) {
                                // Logic will be written here
                                }

                                flatten(data);


Here, data represents the nested array passed to the function.

------------------------------------
Step 2 – Iterate through the array
--------------------------------- ----
Now, apply a for loop to iterate through the array.

                                function flatten(data) {
                                for (let i = 0; i < data.length; i++) {
                                    console.log(data[i]);
                                }
                                }


Here:
- i = 0 initializes the loop.
- i < data.length checks the array length.
- i++ increments the index.
- data[i] accesses the current element.
Initially, this loop prints the elements at the first level. If an element is another array, it is printed as an array.

-----------------------------------------------
Step 3 – Check whether an element is an array
--------------------------------------------- --

Now, we need to check whether the current element is an array.
If it is an array, we need to pass that array to the same flatten() function again.
This is where we use recursion.

-------------------------
Step 4 – Apply recursion
----------------------- ---

Use Array.isArray() to check whether the current element is an array.

                                function flatten(data) {
                                for (let i = 0; i < data.length; i++) {
                                    if (Array.isArray(data[i])) {
                                    flatten(data[i]);
                                    } else {
                                    console.log(data[i]);
                                    }
                                }
                                }


Explanation:
- Array.isArray(data[i]) checks whether the current element is an array.
- If it is an array, call flatten(data[i]) again.
- If it is not an array, print the element.
The same function keeps calling itself until it reaches individual elements.
This technique is called recursion.


----------------------------------------------
Step 5 – Store all elements in a single array
----------------------------------------- -----

So far, we are printing all the individual values separately.
But our actual requirement is to store all the values inside one single array.
For that, create an empty array called collect.
                            
                                let collect = [];


Instead of printing the individual elements using console.log(), use:
collect.push(data[i]);
This adds each individual element to the collect array.

-------------------------
Complete code
-------------- ------------

                        let data = [1, [2, 3], [4, [5, 6]], 7];

                        let collect = [];

                        function flatten(data) {
                        for (let i = 0; i < data.length; i++) {
                            if (Array.isArray(data[i])) {
                            flatten(data[i]);
                            } else {
                            collect.push(data[i]);
                            }
                        }
                        }

                        flatten(data);

                        console.log(collect);


                        Final output
                        [1, 2, 3, 4, 5, 6, 7]


Final result
Now, all the elements from the nested arrays are stored inside one single array.
No matter how deeply nested the array is, the same recursive logic extracts all the individual elements.

------------------------------------
How recursion works in this example
----------------------------------- -

Let's understand with a simple example:

                        let data = [1, [2, [3, 4]]];

                        Step-by-step execution
                        1. First level
                        
                        Finds 1 → pushes it into collect.
                        2. Second level
                        
                        Finds [2, [3, 4]] → calls flatten() again.
                        3. Third level
                        
                        Finds 2 → pushes it into collect.
                        4. Fourth level
                        
                        Finds [3, 4] → calls flatten() again.
                        5. Final level
                        
                        Finds 3 and 4 → pushes both into collect.

                        Final array
                        [1, 2, 3, 4]