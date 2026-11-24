filter(Boolean) Removes Empty Values 
=======================================

------------------------------------------------------
Question 1: Remove empty elements using filter(Boolean)
------------------------------------------------------ --
The instructor provides an array named data containing numbers, empty slots, and empty strings.
let data = [20, 4, 6, , "", 2, , , ""];


The first task is to remove all the empty elements from this array.

Solution:
---------- -
The instructor uses the filter() method and passes the Boolean function directly as its callback.

                        let result = data.filter(Boolean);

                        console.log(result);

                        Output:
                        [20, 4, 6, 2]


Explanation:
------------- -
Boolean is a built-in JavaScript function that converts a value into either true or false.

When we use filter(Boolean), the filter() method passes each existing array element to the Boolean function.
- If the value is truthy, Boolean returns true, and filter() keeps that element.
- If the value is falsy, Boolean returns false, and filter() removes that element.
- Empty array slots are automatically skipped by filter().

For example:
Boolean(20);  // true
Boolean(4);   // true
Boolean(6);   // true
Boolean("");  // false
Boolean(2);   // true


Therefore, the resulting array contains only:
[20, 4, 6, 2]

------------------------------------------------------------------
Question 2: Remove empty elements using a custom callback function
------------------------------------------------------------------ ---
The second question is about manually implementing the same logic using a callback function.
Instead of passing Boolean directly, the instructor creates a custom function inside filter().

Solution:
---------- -
                    let result = data.filter(function(item) {
                        if (item != false) {
                            return item;
                        }
                    });

                    console.log(result);

                    Output:
                    [20, 4, 6, 2]


Explanation:
1. The filter() method iterates through each existing element in the array.
2. Each element is passed to the callback function as item.
3. The condition item != false checks whether the current item is not loosely equal to false.
4. If the condition is true, the function returns the item.
5. Otherwise, it does not return a truthy value, so filter() skips that element.
6. Finally, filter() returns a new array containing the remaining elements.

The instructor demonstrates that both approaches produce the same result for the given array.
Final code – Both approaches

                            let data = [20, 4, 6, , "", 2, , , ""];

                            // First approach
                            let result1 = data.filter(Boolean);
                            console.log(result1);

                            // Second approach
                            let result2 = data.filter(function(item) {
                                if (item != false) {
                                    return item;
                                }
                            });
                            console.log(result2);


                            Output:
                            [20, 4, 6, 2]
                            [20, 4, 6, 2]

                               