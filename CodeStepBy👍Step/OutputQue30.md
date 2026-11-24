JavaScript Loop Output with setTimeOut 
========================================

-----------------------
1. Interview Question
-----------------------
What will be the output of the following JavaScript code? Explain why it produces this output.
                           
                            for (var i = 0; i < 4; i++) {
                                setTimeout(() => {
                                    console.log(i);
                                }, 1000);
                            }


Before reading the explanation, try to predict the output.

Will it print:
- 0 1 2 3
- 4 4 4 4
- 1 2 3 4
Let's understand the correct answer.

--------------------
2. Expected Output
---------------------
Output: 4 4 4 4
4
4
4
4


The number 4 is printed four times.

-------------------------------------
3. Why does it print 4 four times?
----------------------------------------

Let's understand the execution step by step.

--------------------------------------
Step 1: The for loop starts executing
------------------------------------- -
for (var i = 0; i < 4; i++)

The loop starts with i = 0 and continues as long as i < 4.
Therefore, the loop executes four times:

- Iteration	  ->   Value of i
- First	      ->       0
- Second	  ->       1
- Third	      ->       2
- Fourth	  ->       3

------------------------------------
Step 2: Understanding setTimeout()
------- -----------------------------
Inside the loop, we have:

                        setTimeout(() => {
                            console.log(i);
                        }, 1000);


The setTimeout() function delays the execution of its callback by approximately 1000 milliseconds (1 second).
An important point is that setTimeout() does not stop or pause the for loop.
The loop continues executing without waiting for the timeout callbacks.

-----------------------------------------------------------
Step 3: The for loop completes before setTimeout executes
-------------------------------------------------------- ---
Since the loop does not wait for the setTimeout() callbacks, all four iterations complete first.

During these iterations, the value of i changes:
- First iteration: i = 0
- Second iteration: i = 1
- Third iteration: i = 2
- Fourth iteration: i = 3
After the fourth iteration, i++ increases its value to 4.

Now the condition i < 4 becomes false, and the loop stops.

---------------------------------------
Step 4: setTimeout callbacks execute
----------------------------------- -----
After approximately one second, the four callbacks execute.
However, all four callbacks refer to the same variable i because it was declared using var.
By this time, the loop has already finished, and the final value of i is 4.
Therefore, all four callbacks print 4.

-----------------------------------------
4. Why doesn't it print 3 four times?
-----------------------------------------
This is the second important question discussed in the video.
You might think that the last value inside the loop is 3, so why doesn't JavaScript print 3 four times?
The reason is that after the last iteration, the i++ statement executes.

Let's understand:
for (var i = 0; i < 4; i++) {
    // loop body
}

When i = 3, the condition i < 4 is true, so the loop executes.
After that iteration:
i++;

The value becomes 4.

Now JavaScript checks the condition again:
4 < 4  // false

The loop terminates.

Therefore, when the setTimeout() callbacks execute, the value of i is already 4, not 3.

--------------------------------------------
5. What happens if we remove setTimeout()?
--------------------------------------------
The instructor also demonstrates what happens when we remove setTimeout().

                for (var i = 0; i < 4; i++) {
                    console.log(i);
                }


                Output:
                0
                1
                2
                3


Explanation:

Here, console.log(i) executes immediately during each loop iteration.
There is no asynchronous delay.
Therefore, JavaScript prints the current value of i during every iteration.

------------------------------------------
6. Important JavaScript concepts covered
-------------------------------------------
- Concept	                     ->                                   Explanation
- var                            ->         	Has function scope and shares the same binding across loop iterations
- setTimeout()                   ->         	Schedules a callback for later execution
- Asynchronous execution	     ->               The loop doesn't wait for the timeout callback
- i++	                         ->               Increments the value after each iteration
- Closure	                     ->               The callback retains access to the variable i

----------------------------
7. Final Interview Takeaway
-----------------------------
Remember these important points:
1. setTimeout() does not pause the execution of a for loop.
2. The loop completes before the scheduled callbacks execute in this example.
3. var creates one shared variable for all iterations.
4. By the time callbacks execute, the final value of i is 4.
5. Therefore, the output is 4 4 4 4.

Interview tip: This question is commonly asked in JavaScript interviews to test your understanding of closures, asynchronous JavaScript, event loop behaviour, and the difference between var and let.

In the next part of the video, the instructor will explain two different ways to print 0 1 2 3 even when using setTimeout().