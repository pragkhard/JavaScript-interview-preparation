Move All Zeros to End of Array 
===============================

Problem statement: Given an array containing both zero and non-zero values, move all the zeros to the end of the array while keeping the non-zero elements in their original order.

                            For example:
                            let arr = [0, 1, 0, 3, 12];


                            Expected output:
                            [1, 3, 12, 0, 0]


The video demonstrates how to solve this problem using two for loops.

-------------------------------------------------------
1. First, move all non-zero elements to the beginning
--------------------------------------------------------

The first step is to move all non-zero elements forward in the array.

For this, we create a variable called index and initialize it to 0.

                            let arr = [0, 1, 0, 3, 12];
                            let index = 0;


Now, run a for loop that iterates through the entire array.

                            for (let i = 0; i < arr.length; i++) {
                            if (arr[i] !== 0) {
                                arr[index] = arr[i];
                                index++;
                            }
                            }


Let's understand what is happening here.
- i iterates through every element of the array.
- arr[i] !== 0 checks whether the current element is non-zero.
- If the condition is true, the current element is placed at the position indicated by index.
- After placing the element, index++ increases the index by one.
- If the current element is zero, the condition is false, so nothing happens.


-------------------------------------------
2. Understand the iteration step by step
-------------------------------------------

Let's take this array:

                            let arr = [0, 1, 0, 3, 12];

                            Initially:
                            index = 0;


The loop checks each element one by one.

----------------------
Iteration 1: i = 0
-------------------- -

Current value is 0.
arr[0] !== 0 // false

The condition is false, so nothing happens.

--------------------
Iteration 2: i = 1
-------------------- -

Current value is 1.
arr[1] !== 0 // true


Now, place 1 at arr[index].
arr[0] = 1;
index++;


Array becomes:
[1, 1, 0, 3, 12]


Now index = 1.

-----------------------
Iteration 3: i = 2
------------ ------------

Current value is 0.
arr[2] !== 0 // false


Nothing happens. index remains 1.

-----------------------
Iteration 4: i = 3
------------ -----------

Current value is 3.
arr[3] !== 0 // true


Place 3 at arr[index].
arr[1] = 3;
index++;


Array becomes:
[1, 3, 0, 3, 12]


Now index = 2.

----------------------
Iteration 5: i = 4
------------- ---------

Current value is 12.
arr[4] !== 0 // true


Place 12 at arr[index].
arr[2] = 12;
index++;


Array becomes:
[1, 3, 12, 3, 12]


Now index = 3.

------------------------------------------------
3. Understand the array after the first loop
------------------------------------------------

After the first loop, the array looks like this:
[1, 3, 12, 3, 12]

The important thing to understand is that all non-zero elements have been moved to the beginning of the array.
However, the last two positions still contain old values (3 and 12).

Why?
---- -
Because the first loop only moves non-zero elements forward. It does not remove or clear the old values from their previous positions.

We need another loop to replace those remaining positions with zeros.

--------------------------------------------
4. Use the second for loop to place zeros
--------------------------------------------

The index variable is currently 3.
This means that the non-zero elements occupy positions 0, 1, and 2.

Now, run another loop starting from index and continue until the end of the array.

for (let i = index; i < arr.length; i++) {
  arr[i] = 0;
}

Here:
- The loop starts at index, which is 3.
- It continues until i reaches the array's length.
- Each remaining position is assigned the value 0.
After this loop, the array becomes:
[1, 3, 12, 0, 0]


Final output
[1, 3, 12, 0, 0]

------------------------------
5. Complete JavaScript code
------------------------------

Here is the complete solution demonstrated in the video:

                        let arr = [0, 1, 0, 3, 12];

                        function moveZeros(arr) {
                        let index = 0;

                        // First loop: Move non-zero elements forward
                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i] !== 0) {
                            arr[index] = arr[i];
                            index++;
                            }
                        }

                        // Second loop: Fill remaining positions with zeros
                        for (let i = index; i < arr.length; i++) {
                            arr[i] = 0;
                        }

                        return arr;
                        }

                        console.log(moveZeros(arr));


                        Output:
                        [1, 3, 12, 0, 0]


-------------------------------------
6. Important concepts for interviews
----------------------------------------

- Concept	                        ->         Explanation
- index = 0	                        ->         Tracks the next position for a non-zero element
- arr[i] !== 0	                    ->         Checks whether the current element is non-zero
- arr[index] = arr[i]	            ->         Places the non-zero element at the correct position
- index++	                        ->         Moves to the next available position
- Second for loop	                ->         Fills all remaining positions with zeros

Time and space complexity:
- Time Complexity: O(n) – Both loops together traverse the array linearly.
- Space Complexity: O(1) – The solution modifies the original array without creating another array.

-----------------------
7. Interview question
------------------------

Question: Given an array containing zeros and non-zero elements, write a JavaScript function to move all zeros to the end of the array without changing the relative order of the non-zero elements.

Input:
[0, 1, 0, 3, 12]


Expected output:
[1, 3, 12, 0, 0]


Important interview follow-up: Can you solve this problem in-place, without creating an additional array, with O(n) time complexity and O(1) extra space?