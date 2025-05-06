Implement Caching/Memoize Function-
------------------------------------
I have given with this function which has some expensive calculation inside of it which when executed every time takes a decent amount of time to run so if I go on and run this.
So I am gonna use console.time to measure how much time did this took to run and I am gonna run it twice actually with the same parameters. So first time it took 40milisecond and second time took 42miliseconds so how do we minimize this time calculation. If the parameter of the function are same we need to cache the result of the previous function somewhere right so that is what we are going to implement the functions.

Problem Statement - 
-------------------

        const clumsyssquare = (num1, num2) => {
        for (let i = 1; i <= 100000000; i++) { }

        return num1 * num2;

        };

        console.time("First call");
        console.log(clumsyssquare(9467, 7649));
        console.timeEnd("First call");
        console.time("Second call");
        console.log(clumsyssquare(9467, 7649));
        console.timeEnd("Second call");

Solution-
----------

        function myMemoize(fn, context) {
        const res = {};

        return function (...args) {
            const argsCache = JSON.stringify(args);

            if (!res[argsCache]) {
            res[argsCache] = fn.apply(context || this, args);
            }

            return res[argsCache];
        };
        }

        // Simulating a clumsy product function with a delay
        const ClumzyProduct = (num1, num2) => {
        for (let i = 1; i < 100000000; i++) {} // Simulate heavy computation
        return num1 * num2;
        };

        const memoizedClumzyProduct = myMemoize(ClumzyProduct);

        console.time("First call");
        console.log(memoizedClumzyProduct(9467, 7649));
        console.timeEnd("First call");

        console.time("Second call");
        console.log(memoizedClumzyProduct(9467, 7649));
        console.timeEnd("Second call");

        O/p - 72413083
              First call: 56.343ms
              72413083
              Second call: 0.082ms


