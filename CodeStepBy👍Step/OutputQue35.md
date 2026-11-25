some() vs every() in JavaScript 
===============================

--------------------------------
1. What is the some() method?
-----------------------------------
The some() method checks whether at least one element in an array satisfies a given condition.
- If at least one element satisfies the condition, it returns true.
- If none of the elements satisfy the condition, it returns false.
In simple words, even if only one element meets the condition, the some() method returns true.

---------------------------------
2. What is the every() method?
---------------------------------
The every() method checks whether all elements in an array satisfy a given condition.
- If every element satisfies the condition, it returns true.
- If even one element fails the condition, it returns false.
In simple words, all elements must satisfy the condition for the every() method to return true.

---------------------------------
3. Example explained in the video
----------------------------------

Suppose we have an array called data and a variable called flag with a value of 19.

const data = [10, 15, 20, 25, 30];
const flag = 19;

Our requirement is to check whether any value in the array is greater than 19.

Example 1: Using some()

Code:
            const output = data.some((item) => {
                return item > flag;
            });

            console.log(output);

            Output:
            true


Explanation:
------------ -
The some() method checks each element against the condition item > flag.
- Element	    ->     Condition (item > 19)	->    Result
- 10	        ->          10 > 19	            ->    false
- 15	        ->          15 > 19	            ->    false
- 20	        ->          20 > 19	            ->    true
- 25	        ->          25 > 19	            ->    true
- 30	        ->          30 > 19	            ->    true

As soon as the method finds an element that satisfies the condition, it returns true.
Here, 20 is greater than 19, so the output is true.

Important: The some() method stops checking once it finds the first matching element.

-------------------------
Example 2: Using every()
----------------------- --
Now let's use the every() method with the same array and condition.

Code:

                const output = data.every((item) => {
                    return item > flag;
                });

                console.log(output);

                Output:
                false


Explanation:
---------- ----

The every() method checks whether all elements are greater than 19.

- Element  ->	Condition (item > 19)	->      Result
- 10	   ->           10 > 19	        ->      false
- 15	   ->           15 > 19	        ->      false
- 20	   ->           20 > 19	        ->      true
- 25	   ->           25 > 19	        ->      true
- 30	   ->           30 > 19	        ->      true

Since 10 and 15 are not greater than 19, not all elements satisfy the condition.
Therefore, the every() method returns false.

Important: The every() method stops checking as soon as it finds an element that fails the condition.

----------------------------------
4. Another example using every()
----------------------------------

In the video, the instructor changes the value of flag from 19 to 3.

                    const data = [10, 15, 20, 25, 30];
                    const flag = 3;

                    const output = data.every((item) => item > flag);
                    console.log(output);

                    Output:
                    true


Why?
---- -
Because every element in the array is greater than 3.
- 10 > 3 → true
- 15 > 3 → true
- 20 > 3 → true
- 25 > 3 → true
- 30 > 3 → true
Since all elements satisfy the condition, every() returns true.

-------------------------------------------
5. Difference between some() and every()
-------------------------------------------
- Feature	            some()	                                                            every()
- Purpose	            Checks whether at least one element satisfies a condition	Checks whether all elements satisfy a condition
- Returns true	        If at least one element matches	                            If all elements match
- Returns false	        If no elements match	                                    If at least one element fails
- Stops checking	    When it finds the first true result	                        When it finds the first false result

--------------------------
6. Real-world examples
--------------------------
--------------------------------------------------------------
Example 1: Using some() – Check whether any user is an admin
----------------------------------------------------- ---------

                    const users = [
                        { name: "Rahul", role: "user" },
                        { name: "Pragati", role: "admin" },
                        { name: "Amit", role: "user" }
                    ];

                    const isAdminPresent = users.some(
                        (user) => user.role === "admin"
                    );

                    console.log(isAdminPresent);

                    Output:
                    true


At least one user has the role of admin.

---------------------------------------------------------------
Example 2: Using every() – Check whether all users are active
---------------------- ----------------------------------------
  
                const users = [
                    { name: "Rahul", active: true },
                    { name: "Pragati", active: true },
                    { name: "Amit", active: true }
                ];

                const allActive = users.every(
                    (user) => user.active === true
                );

                console.log(allActive);

                Output:
                true


All users have an active status.

-------------------------------
7. Important interview points
----------------------------------

- Both some() and every() are JavaScript array methods.
- Both accept a callback function as an argument.
- Both return a Boolean value (true or false).
- Neither method modifies the original array.
- Both methods use short-circuit evaluation, meaning they stop once the result is determined.
- For an empty array, some() returns false, whereas every() returns true.

----------------------------------------
8. Final interview takeaway
------------------------------
some()
At least ONE element must satisfy the condition.
TRUE
If at least one element matches.


every()
ALL elements must satisfy the condition.
TRUE
Only if every element matches.


Easy way to remember:
- some() = At least one.
- every() = All of them.
This is the main difference you should remember for JavaScript and React interviews.