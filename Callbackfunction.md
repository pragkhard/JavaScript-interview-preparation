Callback Function-
--------------------
* A callback is a function that is passed as an argument to another function.
* This technique allows a function to call another function.
* A callback function can run after another function has finished executing.
* A Functions that take the additional function as a parameter are called higher-order functions, and the function which passes as an argument is called a callback function.


        A higher order function takes
        a function as a parameter
                     ^
                     |
        const higherOrderFunction = (callback) { return callback() }
                                                        ^     
                                                        |
                                               A callback is a function that is 
                                               passed as an argument

As we can see from the above image, the high order function takes the callback function as a parameter. Additionally, the callback function will invoke as the last statement of the high order statement. Which, in turn, will ensure that the callback will always invoke after the high order function has completed its execution.

-----------------------------------------------------------------------------------------------------

        function first() {
        console.log("Inside function: first");
        }

        function second() {
        console.log("Inside function: Second");
        }

        first();
        second();

        O/p- Inside function: first
             Inside function: Second

----------------------------------------------------------------------------------------------------
If I want to print second console first.


        function first() {
        console.log("Inside function: first");
        }
        
        function second(callback) {
        console.log("Inside function: Second");
        callback();

        }
        second(first);
        
        O/p - Inside function: Second
              Inside function: first

----------------------------------------------------------------------------------------------------

Simulate a code delay

        function first() {
        // Simulate a code delay
        setTimeout(function () {
            console.log("Inside function: first");
        }, 1500);
        }

        function second() {
        console.log("Inside function: second");
        }

        first();
        second();

        O/p - Inside function: second
              Inside function: first

-----------------------------------------------------------------------------------------------------
Invoke only first() function, it will auto-invoke second() - 

        function first(callback) {
        // Simulate a code delay
        setTimeout(function () {
            console.log("Inside function: first");
            callback();
        }, 1500);
        }

        function second() {
        console.log("Inside function: second");
        }

        first(second);

        O/p - Inside function: first
              Inside function: second


Suppose there is function function1(), which should be invoked// before function2(), then function1() can take a callback as parameter// which will be invoked as last statement of the function1().

-----------------------------------------------------------------------------------------------------

Callback hell-
---------------
This is a big issue caused by coding with complex nested callbacks. Here, each and every callbacktakes an argument that is a result of the previous callbacks. In this manner, The code structurelooks like a pyramid, making it difficult to read and maintain. Also, if there is an error in onefunction, then all other functions get affected.

Example/ Problem statement -
------------------------------

        function addition(val, cb) {
        return cb(val + 5, false);
        }

        function subtraction(val, cb) {
        return cb(val - 5, false);
        }

        function multiplication(val, cb) {
        return cb(val * 5, false);
        }

        addition(5, function (addRes, err) {
        if (!err) {
            subtraction(addRes, function (subRes, err) {
            if (!err) {
                multiplication(subRes, function (mulRes, err) {
                if (!err) {
                    console.log("Result:", mulRes);
                } else {
                    console.log("Error in multiplication");
                }
                });
            } else {
                console.log("Error in subtraction");
            }
            });
        } else {
            console.log("Error in addition");
        }
        });
       
O/p - Result: 25

Condition:Resolve-
-------------------

        var promise = new Promise(function (resolve, reject) {
        resolve(5);
        });

        function addition(val) {
        return val + 5;
        }

        function subtraction(val) {
        return val - 5;
        }

        function multiplication(val) {
        return val * 5;
        }

        promise
        .then(addition)
        .then(subtraction)
        .then(multiplication)
        .then(function (msg) {
            console.log('Result:', msg);
        })
        .catch(function (err) {
            console.log('Error:', err);
        });
       
O/p - Result: 25


Condition:Reject-
-----------------

        var promise = new Promise(function (resolve, reject) {
        reject(5);
        });

        function addition(val) {
        return val + 5;
        }

        function subtraction(val) {
        return val - 5;
        }

        function multiplication(val) {
        return val * 5;
        }

        promise
        .then(addition)
        .then(subtraction)
        .then(multiplication)
        .then(function (msg) {
            console.log('Result: ' + msg);
        })
        .catch(function (err) {
            console.log('Error: ' + err);
        });


O/p - ERROR!
      Error: 5

-----------------------------------------------------------------------------------------------

Promise Syntax-
----------------

        let myPromise = new Promise(function (myResolve, myReject) {
            // "Producing Code" (May take some time)

            myResolve(); // when successful
            myReject();  // when error
        });
        myPromise.then( ).catch();


* ".then", a method that will perform some of the action only when a given promise is fulfilled or resolved.
* ".catch" block that will allow handling the broken or instances of error.

---------------------------------------------------------------------------------------------------

Async/Await- 
-------------
* One can declare the Async functions in JavaScript by specifying the "async" keyword in front of the function definition.
* For handling the async functions, you can use the "await" keyword while invoking to function to wait for the promise to resolve.
* Usage of async and await makes the program very clean and understandable. The reason being, there is no need to explicitly specify the dependencies of function calls using the ".then()" method.

