JS Interview Trick Asked in Accenture & Wipro 
================================================

------------------------
1. Interview Question
-------------------------

Given two arrays, write a JavaScript function that takes both arrays as input and returns an object.
- The elements of the first array should become the keys of the object.
- The elements of the second array should become the corresponding values of the object.

Example input:
                        const arr1 = ["name", "age", "email"];
                        const arr2 = ["Pragati", 30, "pragati@gmail.com"];

                        Expected output
                        {
                        name: "Pragati",
                        age: 30,
                        email: "pragati@gmail.com"
                        }

Here:
- "name" is the key and "Pragati" is its value.
- "age" is the key and 30 is its value.
- "email" is the key and "pragati@gmail.com" is its value.

-------------------------------
2. Solution using a for loop
--------------------------------
We can solve this problem by creating a function called makeObject() that accepts two arrays as parameters.

Code:
                            function makeObject(arr1, arr2) {
                                let obj = {};

                                for (let i = 0; i < arr1.length; i++) {
                                    obj[arr1[i]] = arr2[i];
                                }

                                return obj;
                            }

                            const input1 = ["name", "age", "email"];
                            const input2 = ["Pragati", 30, "pragati@gmail.com"];

                            const output = makeObject(input1, input2);
                            console.log(output);


                            Output:
                            {
                            name: "Pragati",
                            age: 30,
                            email: "pragati@gmail.com"
                            }


-----------------------------
3. Step-by-step explanation
------------------------------
Let's understand how the code works.

Step 1: Create a function
------------------------ --

function makeObject(arr1, arr2) {


The function accepts two parameters:
- arr1 – the first array, which contains the object keys.
- arr2 – the second array, which contains the object values.


Step 2: Create an empty object
------------------------------- -

let obj = {};

We create an empty object where we will store the key-value pairs.

Initially:
obj = {};


Step 3: Iterate through the first array
--------------------------------------- --

for (let i = 0; i < arr1.length; i++) {


The for loop starts from index 0 and continues until it reaches the length of the first array.
For this example, the array length is 3, so the loop executes three times.

Step 4: Assign keys and values
----------------------------- --

obj[arr1[i]] = arr2[i];


This is the most important line in the solution.
It takes the element at index i from the first array and uses it as the object key. The element at the same index from the second array becomes its value.

Let's understand this iteration by iteration:
---------------------------------------------- --

- Iteration	     ->       arr1[i] (Key)	  ->      arr2[i] (Value)	  ->                        Object
- 1 (i = 0)	     ->       name	          ->          Pragati	      ->        { name: "Pragati" }
- 2 (i = 1)	     ->       age	          ->                 30	      ->        { name: "Pragati", age: 30 }
- 3 (i = 2)	     ->       email	          ->  pragati@gmail.com	      ->    { name: "Pragati", age: 30, email: "pragati@gmail.com" }

Step 5: Return the object
------------------------ -
return obj;

After the loop completes, the function returns the final object containing all the key-value pairs.

Step 6: Call the function
------------------------ --

const output = makeObject(input1, input2);

console.log(output);

We pass both arrays to the function and store the returned object in the output variable.

4. Alternative solution using Object.fromEntries()
---------------------------------------------------

JavaScript also provides a built-in method called Object.fromEntries() that can solve this problem in fewer lines.

                    function makeObject(arr1, arr2) {
                        return Object.fromEntries(
                            arr1.map((key, index) => [key, arr2[index]])
                        );
                    }


Here:
- map() creates a new array.
- Each element is converted into a key-value pair in the form [key, value].
- Object.fromEntries() converts those pairs into an object.

--------------------------------
5. Important interview concepts
----------------------------------

- Concept	            ->              Explanation
- for loop	            ->              Iterates through array elements
- arr.length	        ->              Returns the number of elements in an array
- Array indexing	    ->              Accesses elements using their index
- Object	            ->              Stores data as key-value pairs
- Dynamic keys	        ->              obj[arr1[i]] creates keys dynamically
- Object.fromEntries()	->              Converts key-value pairs into an object

Important edge cases:
--------------------- --
- If both arrays have different lengths, this implementation uses only the elements available at matching indices in the first array. A missing value becomes undefined.
- If the first array contains duplicate keys, the later value overwrites the earlier value.
- An empty first array returns an empty object.

----------------------------
6. Time and Space Complexity
--------------------------------
- Time Complexity: \(O(n)\) – the loop iterates through the first array once.
- Space Complexity: \(O(n)\) – the resulting object stores up to n key-value pairs.

-----------------------------
7. Final Interview Takeaway
--------------------------------
The most important line to remember is:
obj[arr1[i]] = arr2[i];

This dynamically assigns elements from two arrays as keys and values in an object.

Interview tip: First explain the for loop solution because it demonstrates your understanding of arrays, loops, and objects. Then mention Object.fromEntries() as an alternative modern JavaScript approach.