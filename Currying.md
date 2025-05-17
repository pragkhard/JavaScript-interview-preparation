* What is Currying?
* Why should currying be used?
* How does currying work?
* Interview Questions
* Currying v/s partial application
* Manipulating DOM using currying

* Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
* Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.

Convert f(a, b) into f(a)(b).
------------------------------

f(a,b) implementation -
-----------------------

        function f(a,b) {
            return "Works"
        }


Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument. In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
Uses of currying function
  * It helps to avoid passing same variable again and again.
  * It is extremely useful in event handling. 

* It is a new way / approach of writing the function and passing the argument.
* Takes the first one and return a new function that takes the second one and returns a new function which takes the third one and passing the arguments at one time. Using the currying technique multiple arguments passing into sequence of functions with the single arguments.

Normal Case -
------------ 
        function Addition(a, b, c) {
            return a + b + c;
        }
        let rec = Addition(2, 3, 4);
        console.log(rec);

        O/p - 9

Suppose we have the senario like this -
---------------------------------------
        function Addition(a) {
            return function (b) {
                return function (c) {
                    return a + b + c;
                }
            }
        }
        let rec = Addition(2);
        let data = rec(3);
        let data1 = data(4);
        console.log(data1);

        O/p - 9

Using Curring  -
----------------
        function Addition(a) {
            return function (b) {
                return function (c) {
                    return a + b + c;
                }
            }
        }
    
        let rec = Addition(2)(3)(4);
        console.log(rec);

         O/p - 9
----------------------------------------------------------------------------------------------------

Infinite Currying-
------------------
Problem Statement - Again and again return the function-
--------------------------------------------------------

        function add(a) {
            return function(b) {
                return function() {
                    return a + b;
                }
            }
        }
        console.log(add(2)(3)());
        console.log(add(2)(3)(7));

Solution-
----------

        function add(a) {
        return function (b) {
            if (b) return add(a + b);
            return a;
        }
        }
        console.log(add(2)(3)(7)()); 

        O/p - 12       