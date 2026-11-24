JavaScript Function.length 🤯 95% Developers Get This Wrong! #javascript #tricks
===================================================================================

--------------------------------------
1. Checking the length of a function
---------------------------------------
First, we have a function called fruits with two parameters.

                            function fruits(a, b) {
                                console.log(a, b);
                            }

                            console.log(fruits.length);

                            Output:
                            2


Explanation:
------------- -
The length property of a function returns the number of parameters defined in the function declaration.
Here, the fruits function has two parameters: a and b. Therefore, fruits.length returns 2.

-------------------------------------------
2. Adding more parameters to the function
---------------------------------------------
Now, let's add two more parameters, c and d.

                            function fruits(a, b, c, d) {
                                console.log(a, b, c, d);
                            }

                            console.log(fruits.length);

                            Output:
                            4


Explanation:
------------ ---
Since the function has four parameters, its length property returns 4.
This means that the length of a function depends on the number of parameters defined in its declaration, not on the number of arguments passed when calling it.

---------------------------------------------------------
3. Checking function length without calling the function
----------------------------------------------------------
Now, let's understand another interesting scenario.
We can check the length of a function without calling it.

                        function fruits(a, b, c, d) {
                            console.log(a, b, c, d);
                        }

                        console.log(fruits.length);
                        console.log(fruits('A', 'B', 'C'));


                        Output:
                        4
                        A B C undefined


Explanation:
------------ --
Here, we are accessing fruits.length directly without using parentheses to call the function.
JavaScript does not throw an error because length is a built-in property of function objects.

It returns the number of parameters declared in the function.

--------------------------------------------------------
4. What happens when we pass arguments to the function?
--------------------------------------------------------
Now, let's consider a different example.

                    function fruits(a, b, c, d) {
                        return "Hello";
                    }

                    console.log(fruits('A', 'B', 'C').length);

                    Output:
                    5


Explanation:
------------- --
In this example, we are calling the function and accessing the length property of the value returned by the function.
The function returns the string "Hello".
The length of this string is 5 because it contains five characters.

Now, if we change the returned string:

                    function fruits(a, b, c, d) {
                        return "Hello How Are You";
                    }

                    console.log(fruits('A', 'B', 'C').length);

                    Output:
                    18


The output is 18 because the returned string contains 18 characters, including spaces.

Important difference:
- fruits.length returns the number of parameters defined in the function.
- fruits().length returns the length of the value returned by the function, if that value has a length property.

-----------------------------------------------------
5. What happens when we define a default parameter?
---------------------------------------------------
Now, let's understand one more important interview scenario.
Suppose we define a default value for the second parameter.

                    function fruits(a, b = 0, c, d) {
                        console.log(a, b, c, d);
                    }

                    console.log(fruits.length);

                    Output:
                    1


Explanation:
----------- -
This is an important rule of JavaScript.

When a function has a default parameter, the length property counts only the parameters that appear before the first parameter with a default value.

Here:
- a is the first parameter.
- b = 0 is the second parameter with a default value.
- c and d come after the default parameter.
Therefore, JavaScript counts only a, and the output is 1.

Let's understand this with another example.

                    function fruits(a, b, c = 10, d) {
                        console.log(a, b, c, d);
                    }

                    console.log(fruits.length);

                    Output:
                    2


Here, a and b appear before the first default parameter c = 10.
Therefore, the function's length is 2.

------------------------------------------
6. Important interview rules to remember
------------------------------------------
- Function declaration	                              ->                      function.length
- function test(a, b) {}	                          ->                              2
- function test(a, b, c, d) {}	                      ->                              4
- function test(a, b = 0, c) {}	                      ->                              1
- function test(a, b, c = 10, d) {}	                  ->                              2
- function test(a = 1, b = 2) {}	                  ->                              0

One more important point: Rest parameters are not counted in the function's length.

                    function test(a, b, ...rest) {}

                    console.log(test.length);

                    Output:
                    2

----------------------------
7. Final interview takeaway
-------------------------------
Remember these two important concepts:
1. Function length: The length property returns the number of parameters declared before the first default parameter or rest parameter.
2. Default parameters: Once a default parameter appears, JavaScript does not count that parameter or any parameters after it.
This is a common JavaScript interview question, especially for ReactJS and frontend developer positions.                  