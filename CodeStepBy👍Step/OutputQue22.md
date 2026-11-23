Sum of Array Elements (Ignore Non-Numeric Values)
====================================================

The video covers two related problems:
------------- ------------------------
1. Calculate the sum of all elements in an array when all elements are numbers.
2. Calculate the sum of only numeric elements when the array contains both numbers and non-numeric values.

The speaker solves both problems using a function and a for...of loop.

---------------------------------------
1. Understand the interview questions
----------------------------------------
-----------------------------------------------------
Question 1: Find the sum of all elements in an array.
-------------------------------------------------- ----
Example:

                    let arr = [10, 20, 30, 40, 50];
                    Expected output:
                    150

----------------------------------------------------
Question 2: Find the sum of numeric elements only.
----------------------------------------------- ---
Suppose the array contains numbers as well as strings:

                    let arr = [10, 20, 30, 40, 50, "Apple", "Green"];
                    Expected output:
                    150

The non-numeric values ("Apple" and "Green") should be ignored.

-----------------------
2. Create a function
------------------------
First, create a function named getSum.

                    The function accepts an array as a parameter.
                    function getSum(arr) {
                        // Logic will go here
                    }

Here:
- getSum is the function name.
- arr is the parameter that receives the input array.
Now call this function and pass the array as an argument.

-----------------------------
3. Initialize a sum variable
-------------------------------
Inside the function, create a variable named sum and initialize it to zero.
let sum = 0;

This variable stores the total sum of the array elements.
We initialize it to zero because we haven't added any values yet.

----------------------------------------------------
4. Iterate through the array using a for...of loop
-----------------------------------------------------
Next, use a for...of loop to iterate through the array.

                    for (let item of arr) {
                        sum += item;
                    }

How does this work?
----------------------
- for...of iterates through each element of the array.
- item represents the current element.
- sum += item adds the current element to the existing sum.

For example, consider:

                  let arr = [10, 20, 30, 40, 50];

The loop processes the values one by one.
- Iteration   ->  	Item	->  Calculation	   ->    Sum
- 1	          ->    10	    ->    0 + 10	   ->    10
- 2	          ->    20	    ->    10 + 20	   ->    30
- 3	          ->    30	    ->    30 + 30	   ->    60
- 4	          ->    40	    ->    60 + 40	   ->    100
- 5	          ->    50	    ->    100 + 50	   ->    150

After all elements have been processed, the final sum is 150.

------------------
5. Return the sum
-------------------
Once the loop finishes, return the sum variable.
                    
                    return sum;

Now call the function using console.log() to display the result.

                    let data = [10, 20, 30, 40, 50];
                    console.log(getSum(data));
                    Output:
                    150

This completes the first interview question.

------------------------------------
6. Problem with non-numeric values
-------------------------------------
Now the speaker adds some non-numeric values to the same array.

                    let data = [10, 20, 30, 40, 50, "Apple", "Green"];

                    If you use the same logic:
                    sum += item;


JavaScript may concatenate the string values instead of adding them numerically.

For example:

                    let sum = 150;
                    sum += "Apple";
                    console.log(sum);

                    Output:
                    150Apple


This happens because the + operator performs string concatenation when one of its operands is a string.
But our requirement is to ignore non-numeric values and calculate the sum of numbers only.

-------------------------------------
7. Check the data type using typeof
----------------------------------------
To solve this problem, the speaker adds an if condition inside the loop.
                   
                    if (typeof item === "number") {
                        sum += item;
                    }


How does this work?
- typeof item checks the data type of the current element.
- If the element is a number, the condition returns true.
- Only numeric values are added to sum.
- Strings and other non-numeric values are ignored.


For example:
- console.log(typeof 10);       // "number"
- console.log(typeof "Apple");  // "string"
- console.log(typeof 20);       // "number"

Therefore, "Apple" and "Green" will not be added to the sum.

----------------------------------------------
8. Complete JavaScript code – Both approaches
----------------------------------------------

Approach 1: Sum all numeric array elements
------------------------------------- ----

                        function getSum(arr) {
                            let sum = 0;

                            for (let item of arr) {
                                sum += item;
                            }

                            return sum;
                        }

                        let data = [10, 20, 30, 40, 50];

                        console.log(getSum(data)); // 150



Approach 2: Sum only numeric values and ignore non-numeric values
---------------------------------------------------------- ----

                        function getSum(arr) {
                            let sum = 0;

                            for (let item of arr) {
                                if (typeof item === "number") {
                                    sum += item;
                                }
                            }

                            return sum;
                        }

                        let data = [10, 20, 30, 40, 50, "Apple", "Green"];

                        console.log(getSum(data)); // 150

--------------------------------------------
9. Dry run – Understand the second approach
--------------------------------------------
Input:
let data = [10, 20, 30, 40, 50, "Apple", "Green"];


The function checks each element:
-   Item	      ->   Data type	    ->      Is it a number?	       ->         Sum
-   10	          ->   number	        ->            Yes	           ->          10
-   20	          ->   number	        ->            Yes	           ->          30
-   30	          ->   number	        ->            Yes	           ->          60
-   40	          ->   number	        ->            Yes	           ->          100
-   50	          ->   number	        ->            Yes	           ->          150
-   Apple	      ->   string	        ->            No	           ->          150
-   Green	      ->   string	        ->            No	           ->          150

Final output
150
The function adds all numeric values and ignores the strings.

-----------------------------------
10. Important interview concepts
---------------------------------

-JavaScript concept	                ->                                Purpose
-  Function	                        ->                 Encapsulates the sum calculation logic
-  for...of	                        ->                 Iterates through each array element
-  let sum = 0	                    ->                     Initializes the total
-  sum +=                           ->                    item	Adds the current element to the sum
-  typeof	                        ->                     Checks the data type of an element
-  typeof item === "number"	        ->                 Allows only numeric values
-  return sum                       ->               	 Returns the final result

- Time complexity: O(n), because every array element is checked once.
- Space complexity: O(1), because the solution uses only a fixed number of extra variables.

Important interview follow-up:
--------------------------- -----
The condition typeof item === "number" also accepts NaN and Infinity, because JavaScript considers them numbers. If the interviewerwants only finite numeric values, use:

                    if (typeof item === "number" && Number.isFinite(item)) {
                        sum += item;
                    }

Interview takeaway: The main concept is to iterate through an array using for...of, maintain a running sum, and use typeof to ensure that only numeric elements are included in the calculation.