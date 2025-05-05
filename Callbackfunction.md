Callback Function-
--------------------
* A callback is a function that is passed as an argument to another function.
* This technique allows a function to call another function.
* A callback function can run after another function has finished executing.
* A Functions that take the additional function as a parameter are called higher-order functions, and the function which passes as an argument is called a callback function.




Callback hell-
---------------
This is a big issue caused by coding with complex nested callbacks. Here, each and every callbacktakes an argument that is a result of the previous callbacks. In this manner, The code structurelooks like a pyramid, making it difficult to read and maintain. Also, if there is an error in onefunction, then all other functions get affected.
