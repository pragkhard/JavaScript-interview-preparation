 Remove Duplicates from Array in Single Loop (No Inbuilt Methods)
 =================================================================

----------------------
Problem statement
----------------------
You are given an array containing duplicate values. Your task is to remove the duplicates and create a new array containing only unique values.

                                    Input:
                                    const arr = [1, 2, 3, 2, 4, 5, 1];


                                    Expected output:
                                    [1, 2, 3, 4, 5]


------------------------------------
Step 1 – Iterate through the array
- ----------------------------------

                                    First, apply a for loop.
                                    for (let i = 0; i < arr.length; i++) {
                                    console.log(arr[i]);
                                    }


Here:
- i = 0 means the loop starts from the first element.
- i < arr.length checks that the index is within the array length.
- i++ increments the index after each iteration.
- arr[i] accesses the current array element.
This loop prints all the values in the array, including duplicates.

-----------------------------------
Step 2 – Create two variables
- ----------------------------------

Now, create two variables:
1. obj – an empty object by default.
2. unique – an empty array by default.


                                let obj = {};
                                let unique = [];


The object will help us identify duplicate values, and the unique array will store only unique values.

---------------------------------------------
Step 3 – Store array elements as object keys
- ---------------------------------------------

Now, convert the array elements into object keys and assign true as their values.


                                For example:
                                obj[arr[i]] = true;


The reason for doing this is that object keys cannot be duplicated.

----------------------------------------------
Step 4 – Understand how duplicate keys work
- ----------------------------------------------

                                Suppose we have this array:
                                let arr = [1, 2, 3, 4, 2];


                                When we convert these elements into object keys, the object looks like this:
                                {
                                1: true,
                                2: true,
                                3: true,
                                4: true
                                }


Notice that 2 appears twice in the original array, but it appears only once as an object key.

If the same key is added again, its existing value gets replaced instead of creating a duplicate key.

--------------------------------
Step 5 – Apply the if condition
--- ------------------------------

Now, add an if condition to check whether the current array element already exists in the object.

                                if (!obj[arr[i]]) {
                                // Add the value
                                }


The condition checks:
- If the key does not exist, execute the if block.
- If the key already exists, skip the if block.
For example, when the loop reaches 2 for the second time, it checks whether 2 already exists in the object. Since it already exists, the duplicate value is skipped.


---------------------------------------------
Step 6 – Push unique values into the array
- -------------------------------------------- 

Inside the if condition, push the current element into the unique array and mark it as present in the object.


                            if (!obj[arr[i]]) {
                            unique.push(arr[i]);
                            obj[arr[i]] = true;
                            }


Now, only unique values will be added to the unique array.

------------------------
Final code and output
-------- ------------------


                            let arr = [1, 2, 3, 4, 2];

                            let obj = {};
                            let unique = [];

                            for (let i = 0; i < arr.length; i++) {
                            if (!obj[arr[i]]) {
                                unique.push(arr[i]);
                                obj[arr[i]] = true;
                            }
                            }
                            console.log(unique);


                            Output
                            [1, 2, 3, 4]