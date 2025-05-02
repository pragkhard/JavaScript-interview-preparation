The Event Loop continuously checks the Call Stack and the Callback Queue. If the Call Stack is empty, it pushes tasks from the Callback Queue (such as asynchronous callbacks) into the Call Stack for execution. This allows JavaScript to perform non-blocking operations while handling only one operation at a time in the main thread.

Event Loops:
--------------------------------------------------------------------------------------------------
Eventloop has one job its only job is to continously monitoring the callstack and callstack queue if the callstack is empty and its seem the function is waiting it just to execute inside the callback queue takes the function and push it inside the call stack and callback method quicky executed.

JS is the synchronous single thread lang. 
It has one callstack and it can do one thing at the time 
Call stack present inside the JS engine and all the code executed inside the callstack

Whenever any JS program is run a global context is created and GEC pused inside the callstack and then JS code will run line by line over global context.

Order of exection is :
---------------------------------------------------------------------------------------------------
console.log("start")
This is a synchronous statement.It gets executed immediately and prints: start

        setTimeout(function(){
            console.log("setTimeout")
        },1000)
setTimeout is an asynchronous function.It is handled by the Web APIs(provided by the browse) with a 1000ms timer but doesn’t execute yet
Callstack will not wait anything it will print whatever comes inside it 

console.log("end")

---------------------------------------------------------------------------------------------------

        console.log("start")
        setTimeout(function () {
            console.log("setTimeout")
        }, 1000)

        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => console.log("fetch data received"));

The network request is sent asynchronously. The .then(...) callback is stored in the Microtask Queue
Once the API response is received, the fetch .then() callback moves from the Microtask Queue to the Call Stack.

Macrotasks (Lower Priority than Microtasks)
After 1 second, the setTimeout callback moves from the Macrotask Queue to the Call Stack.

console.log("end")

=====================================================================================================

        console.log("start")
        setTimeout(function () {
            console.log("setTimeout")
        }, 1000)

        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => console.log("fetch data received"));

        Promise.resolve().then(() => console.log("promise resolve"))

        console.log("end")

        O/p-
        start
        end
        promise resolve
        fetch data received
        setTimeout