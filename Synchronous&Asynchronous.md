Difference between synchronous and asynchronous in JavaScript?
----------------------------------------------------------------

Synchronous-
-------------
* In Synchronous programming things happen one at the time.
* Synchronous programming means code will execute in sequence from top to bottom and get block by long running task such as Http Request.
* Synchronous functions block the execution of the program until it has finished processing.
* Synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.


Asynchronous-
---------------
* Asynchronous model allow multiple things to happen at the same time.
* Asynchronous Programming fixes this issue by introducing the event loop and Request can run in background without effecting the remaining code and user interface
* Asynchronous functions do not block the execution of the program.
* Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. 

Javascript is single threaded or multi-threaded ?
---------------------------------------------------
“JavaScript is a synchronous single threaded language”. 
JavaScript execute one line at the time in a specific order means that it can only go to the next line once the current line has been finished execution.

Few ways to write Asynchronous code in the JavaScript-
--------------------------------------------------------
* Callback function
* Promises
* Async/Await 
