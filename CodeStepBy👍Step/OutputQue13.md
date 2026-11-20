Reverse an Array Without reverse
==================================


                                        Input:
                                        let data = [2, 6, 9, 10, 30];


                                        Expected output:
                                        [30, 10, 9, 6, 2]


---------------
Complete code
--------- -----

                                        let data = [2, 6, 9, 10, 30];

                                        function reverseData(data) {
                                        let temp = [];

                                        for (let i = data.length - 1; i >= 0; i--) {
                                            temp.push(data[i]);
                                        }

                                        return temp;
                                        }

                                        let newData = reverseData(data);

                                        console.log(newData);


                                        Final output
                                        [30, 10, 9, 6, 2]


-----------------------------
Step 1 – Create a function
---------------------------- -

First, create a function called reverseData.
Pass the original array as an argument to this function.


                                        function reverseData(data) {
                                        // Logic will be written here
                                        }

                                        reverseData(data);


--------------------------------
Step 2 – Use a reverse for loop
------------------------------- -
Now, we need to apply a for loop.
Normally, a for loop starts from index 0 and moves forward.
But here, we need to reverse the array, so we will start from the last index and move towards index 0.


                                        for (let i = data.length - 1; i >= 0; i--) {
                                        console.log(data[i]);
                                        }


Explanation:
------------- -

- data.length gives the total number of elements in the array.
- data.length - 1 gives the last index because array indexing starts from 0.
- i >= 0 means the loop continues until it reaches index 0.
- i-- decreases the index by one after every iteration.
- data[i] accesses the element at the current index.

For example, if an array contains 6 elements, its indexes are 0, 1, 2, 3, 4, 5.
The loop starts from index 5 and moves backwards until index 0.

------------------------------------------
Step 3 – Print the array in reverse order
-------------------------------------------- -

Now, if we execute the loop, the elements will be printed in reverse order.

For example:

                                        let data = [2, 6, 9, 10, 30];

                                        for (let i = data.length - 1; i >= 0; i--) {
                                        console.log(data[i]);
                                        }


                                        Output:
                                        30
                                        10
                                        9
                                        6
                                        2


The array elements are now being accessed in reverse order.


---------------------------------------------------
Step 4 – Store the reversed values in a new array
---------------------------------------------------- -

So far, we are only printing the values.
But we need to collect all the reversed values into a new array.
For that, create an empty array called temp.
                                    
                                        
                                        let temp = [];


Inside the for loop, use the push() method to add the current element to the new array.
                                    
                                        
                                        temp.push(data[i]);


After the loop finishes, return the temp array.
    
                                        return temp;


-------------------------------------------------
Step 5 – Call the function and print the result
--------------------------------------- --------- 

Now, the function will return the reversed array.
Store the returned result in a new variable called newData and print it using console.log().

-------------------------------
Important interview concepts
-------------------------------- -

1. length returns the total number of elements in an array.
2. Array indexing starts from 0, so the last index is length - 1.
3. i-- moves the loop backwards.
4. push() adds elements to the end of an array.
5. return sends the reversed array back from the function.
Interview takeaway: We use a reverse for loop to access array elements from the last index to the first index. We store those elements in a new array using push() and return the new array.

--------------------------------------------------------
JavaScript also provides the built-in reverse() method:
------------------------------------------------------- -

                                let reversed = [...data].reverse();