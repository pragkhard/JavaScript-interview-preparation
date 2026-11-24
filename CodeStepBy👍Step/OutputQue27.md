JavaScript Function.length 🤯 95% Developers Get This Wrong! #javascript #tricks
===================================================================================

                        console.log(fruits.length);
                        Output:
                        2


The length property returns the number of parameters declared in the function.
Since the function has two parameters, a and b, its length is 2.

----------------------------
2. Adding more parameters
-----------------------------
Now, suppose we add two more parameters, c and d:

                        function fruits(a, b, c, d) {
                            // function body
                        }

                        console.log(fruits.length);

                        Output:
                        4

The output is 4 because the function has four declared parameters.

----------------------------------------------------
3. Checking the length without calling the function
------------------------------------------------------
The speaker explains that we can check a function's length without actually calling it.

                        For example:
                        function fruits(a, b) {
                            return "Hello";
                        }

                        console.log(fruits.length);

                        Output:
                        2


Even though the function is not called, JavaScript returns the number of parameters declared in it.
However, if we call the function and check the length of its returned string:

                        console.log(fruits("A", "B").length);

                        Output:
                        5


This is because the function returns "Hello", which contains five characters.

                        If we change the returned string to "Hello How Are You":

                        function fruits(a, b) {
                            return "Hello How Are You";
                        }

                        console.log(fruits("A", "B").length);


The output will be 18, because the returned string contains 18 characters, including spaces.

------------------------------------------------------------
4. Effect of default parameter values on function length
----------------------------------------------------------
The speaker then explains another important point: default parameters affect the function's length property.

For example:
                        function fruits(a, b = 0) {
                            // function body
                        }

                        console.log(fruits.length);

                        Output:
                        1


Why is the output 1 instead of 2?
------------------------------ --
When a default parameter is defined, JavaScript counts only the parameters that appear before the first parameter with a default value.

Here:
- a is before the default parameter, so it is counted.
- b has a default value of 0, so it is not counted.

Now, consider another example:

                        function fruits(a, b, c = 0, d) {
                            // function body
                        }

                        console.log(fruits.length);

                        Output:
                        2


Only a and b are counted because c is the first parameter with a default value. Parameters after it are also excluded.

--------------------------------------
5. Key points explained in the video
--------------------------------------
- The length property of a function returns the number of declared parameters.
- We can check this property without calling the function.
- If we call a function and check the length of its returned string, it returns the number of characters in that string.
- Parameters with default values are not counted.
- Parameters appearing after the first default parameter are also not counted.
