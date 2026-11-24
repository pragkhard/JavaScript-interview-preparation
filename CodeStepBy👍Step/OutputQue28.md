 Missing Number Logic
 =====================

The question is:
==================
We are given an array containing numbers in a sequence, but one number is missing. We need to identify the missing number.

For example:
----------- -
                        let data = [1, 2, 4, 5];


Here, the number 3 is missing.
However, the missing number can be different. It could be 4, 5, 7, 8, 9, or any other number depending on the array.
Let's understand how to solve this problem step by step.

------------------------
1. Understand the logic
--------------------------
To find the missing number, we need to calculate two sums:
1. Expected Sum: The sum of all numbers that should be present in the array, including the missing number.
2. Actual Sum: The sum of all numbers currently present in the array.
Once we calculate both sums, we can subtract the actual sum from the expected sum.

Formula:
-------- -

                        {Missing Number} = {Expected Sum} - {Actual Sum}


--------------------------------
2. Calculate the expected sum
---------------------------------
First, we need to calculate what the sum would be if no number were missing.
For calculating the sum of consecutive natural numbers, we have the following mathematical formula:

                        {Expected Sum} = {n(n+1)}{2}


Here, n represents the total number of elements that should be present in the array, including the missing number.

For example:
----------- -
                    let data = [1, 2, 4, 5];

Currently, the array contains four elements, but it should contain five elements because one number is missing.

Therefore:

                    let n = data.length + 1;

                    let expectedSum = (n * (n + 1)) / 2;

                    console.log(expectedSum);

                    Output:
                    15


Explanation:
----------- -
                    The expected numbers are:

                    1 + 2 + 3 + 4 + 5 = 15

                    Therefore, the expected sum is 15.

We use data.length + 1 because the array has one missing element.

------------------------------
3. Calculate the actual sum
------------------------------
Now, we need to calculate the sum of the elements currently available in the array.
For this, we can use a for loop.

                            let data = [1, 2, 4, 5];

                            let actualSum = 0;

                            for (let i = 0; i < data.length; i++) {
                                actualSum += data[i];
                            }

                            console.log(actualSum);

                            Output:
                            12


                            Explanation:

                            The actual array contains:

                            1 + 2 + 4 + 5 = 12

                            Therefore, the actual sum is 12.

---------------------------                            
4. Find the missing number
----------------------------
Now, we have both values:

- Expected Sum = 15
- Actual Sum = 12
Subtract the actual sum from the expected sum.

                            let missingNumber = expectedSum - actualSum;

                            console.log(missingNumber);

                            Output:
                            3

                            Answer: 3
                            The missing number is 3.

---------------------------------
5. Complete JavaScript solution
---------------------------------
Here is the complete code combining all the steps:

                        let data = [1, 2, 4, 5];

                        // Step 1: Calculate expected sum
                        let n = data.length + 1;

                        let expectedSum = (n * (n + 1)) / 2;

                        // Step 2: Calculate actual sum
                        let actualSum = 0;

                        for (let i = 0; i < data.length; i++) {
                            actualSum += data[i];
                        }

                        // Step 3: Find missing number
                        let missingNumber = expectedSum - actualSum;

                        console.log("Expected Sum:", expectedSum);
                        console.log("Actual Sum:", actualSum);
                        console.log("Missing Number:", missingNumber);

                        Output:
                        Expected Sum: 15
                        Actual Sum: 12
                        Missing Number: 3

------------------------------
6. Test with another example
------------------------------
The instructor also demonstrates that the same logic works when a different number is missing.

For example:
let data = [1, 2, 3, 5];


Here:
- Expected numbers: 1, 2, 3, 4, 5
- Expected Sum: 15
- Actual Sum: 1 + 2 + 3 + 5 = 11
- Missing Number: 15 - 11 = 4
Output:
4

The missing number is 4.

-----------------------------------
7. Important interview concepts
-------------------------------------
- Concept                                    ->                             	Explanation
- data.length	                             ->                       Returns the number of elements currently present in the array
- data.length + 1	                         ->                       Calculates the expected total number of elements
- n * (n + 1) / 2	                         ->                       Calculates the sum of consecutive natural numbers
- actualSum += data[i]	                     ->                   Adds each array element to the actual sum
- expectedSum - actualSum	                 ->                       Gives the missing number

Time Complexity: \(O(n)\) – We traverse the array once to calculate the actual sum.
Space Complexity: \(O(1)\) – We use only a few additional variables.

Important assumption: This approach works when the array contains consecutive positive integers starting from 1, with exactly one missing number and no duplicates. It is not directly suitable for finding multiple missing numbers.

--------------------------------
8. Final interview takeaway
---------------------------------
Remember this simple approach:
1. Calculate the expected sum using the formula \(n(n+1)/2\).
2. Calculate the actual sum using a for loop.
3. Subtract the actual sum from the expected sum.
4. The result is the missing number.
