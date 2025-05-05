Implement Caching/Memoize Function-
------------------------------------
I have given with this function which has some expensive calculation inside of it which when executed every time takes a decent amount of time to run so if I go on and run this.
So I am gonna use console.time to measure how much time did this took to run and I am gonna run it twice actually with the same parameters. So first time it took 40milisecond and second time took 42miliseconds so how do we minimize this time calculation. If the parameter of the function are same we need to cache the result of the previous function somewhere right so that is what we are going to implement the functions.
