JavaScript setTimeout in Loop Mystery Explained!
===================================================

-------------------------
1. Interview Question
------------------------
In the previous video, we discussed why the following JavaScript code prints 4 four times.

Now, the question is:

How can we modify this code to print 0, 1, 2, 3 instead of 4, 4, 4, 4, while still using setTimeout() inside the for loop?
                       
                        for (var i = 0; i < 4; i++) {
                            setTimeout(() => {
                                console.log(i);
                            }, 1000);
                        }


                        Expected Output:
                        0
                        1
                        2
                        3


The instructor explains two different solutions to this problem.

--------------------------------------------------------
2. Why does the original code print 4 four times?
----------------------------------------------------------
Before discussing the solutions, let's quickly revise the reason.
- The variable i is declared using var, so it has function scope.
- All four setTimeout() callbacks share the same variable i.
- setTimeout() schedules the callback to execute after approximately one second.
- Meanwhile, the for loop completes all its iterations.
- After the loop finishes, the value of i becomes 4.
- When the callbacks execute, they all access the same final value.

                        Therefore, the output is:
                        4
                        4
                        4
                        4

Now let's understand the two solutions.

----------------------------------------
3. Solution 1: Use let instead of var
-----------------------------------------
The first solution is very simple. Replace var with let.
Code:
---- -

                        for (let i = 0; i < 4; i++) {
                            setTimeout(() => {
                                console.log(i);
                            }, 1000);
                        }


                        Output:
                        0
                        1
                        2
                        3


Explanation:
------------ -
The main difference between var and let is their scope.
- var has function scope.
- let has block scope.
When we use let inside a for loop, JavaScript creates a separate binding for each iteration.

This means:
- First iteration: i = 0
- Second iteration: i = 1
- Third iteration: i = 2
- Fourth iteration: i = 3
Each setTimeout() callback remembers its own iteration's value of i.

Therefore, even though all callbacks execute after approximately one second, each callback prints a different value.
Solution 1: Use let

----------------------------------------------------------------------
4. Solution 2: Pass the value as the third argument of setTimeout()
-----------------------------------------------------------------------
The second solution is slightly different.
Instead of changing var to let, we can keep var and pass the current value of i as the third argument of setTimeout().

Code:
---- -
                    for (var i = 0; i < 4; i++) {
                        setTimeout((x) => {
                            console.log(x);
                        }, 1000, i);
                    }


                    Output:
                    0
                    1
                    2
                    3


Explanation:
------------ -
The setTimeout() function accepts additional arguments after the delay parameter.

Its general syntax is:
setTimeout(callback, delay, arg1, arg2, ...);


Here:
- First parameter: Callback function.
- Second parameter: Delay in milliseconds.
- Third parameter: Value passed to the callback function.
- Additional parameters: Any other arguments we want to pass to the callback.
Let's understand this line:
setTimeout((x) => {
    console.log(x);
}, 1000, i);


Here, we are passing the current value of i as the third argument.

The callback function receives that value through the parameter x.

For each iteration:
Iteration	Value of i passed	Value received by x
First	0	0
Second	1	1
Third	2	2
Fourth	3	3

Therefore, each callback receives its own argument value and prints the correct output.

Notice that we use x instead of i inside the callback because x is the parameter receiving the value passed by setTimeout().
Solution 2: Pass the value as an argument

5. Comparison of both solutions
Feature	Solution 1	Solution 2
Approach	Use let	Pass i as an argument
Variable declaration	let i	var i
Callback parameter	i	x
Separate value for each callback	Yes	Yes
Output	0, 1, 2, 3	0, 1, 2, 3

6. Final Interview Takeaway
There are two ways to solve the setTimeout() inside a for loop problem:

Method 1: Use let instead of var because let creates a separate binding for each loop iteration.

Method 2: Pass the current value of i as the third argument of setTimeout(). The callback receives that value through its parameter.

Both approaches produce the expected output:
0
1
2
3


Important concepts to prepare for JavaScript interviews:
1. Difference between var, let, and const.
2. Function scope vs block scope.
3. JavaScript closures.
4. Asynchronous JavaScript.
5. setTimeout() and its arguments.
6. Event loop and callback execution.
Interview tip: Understand why the problem occurs, rather than just memorizing the two solutions. Interviewers may change the loop, delay, variable declaration, or callback structure to test your understanding.