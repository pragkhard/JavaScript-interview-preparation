Diff == and === operator
----------------------------
Both are compare the operator
* ==	->      compares value only.
* ===     ->      compare value and type.
	
-------------------------------------------

        console.log(0 == false)
        console.log(0 === false)

        O/p - true
              false

== (Double Equals)
* It checks if the values are the same, but ignores the type.
* So 0 == false becomes:
* JavaScript changes false to 0, and then compares: 0 == 0 → ✅ true

=== (Triple Equals)
* It checks if the values and types are the same.
* 0 is a number, false is a boolean.
* Since the types are different, 0 === false → ❌ false   

-----------------------------------------------------------------------------------------------------
        
        let a = 0;
        let b = false;
        console.log(a==b)

        O/p - true

----------------------------------------------------------------------------------------------------
I/p let arr = [1,3,12,19,24,29,33], 
0/p let arr = [1,9,361,841,1089]

* Selecting only odd numbers from the array.
* Squaring those numbers.
 
        const result = arr.filter(num => num % 2 !== 0).map((num)=>num*num )
        console.log(result)

* ✅ !== → Correct. Means "not equal" and checks both value and type.
* ❌ ! == → Wrong. It's invalid syntax and will cause an error.

----------------------------------------------------------------------------------------------------

Interview provided this code snippet and he asked to implement this add function.

console.log(add(5)(2)(4)(5)());

First Way- 
----------
        function add(a) {
          return function(b) {
              return function(){
                   return a + b;
              }
          };
        }
        console.log(add(5)(2)()); 

         O/p - 7

Second Way - So if the code have more complexity. We want the code which works infinitely(Infinite Currying)
------------

        function add(a) {
           return function(b) {
             if (b) return add(a+b);
             return a;
           }
        }
        console.log(add(5)(2)(4)(5)()); 

        O/p - 16

We have two of these but then I am gonna check if we have any more params or not.So I will check b has a param then just return add again.But I does not have any value inside of it that means its coming to an end so I am just return a.So let say we have 5, 2, 4, 8 over here so first of all we provided it with the 5 and it returned us a function. Then we again called b with 2  but if its gonna check if 2 is there or not.If there is some value inside of b or not only then its going to return the addition otherwise its just going to return the initial 5 value the sum of those numbers up until that point so we have 2 at that point.If 2 is there return a + b so 5 + 2=7 went inside of this function so now its value is 7 over here but then again its going to return another function then its going to check if we are calling that function as empty but no this is not empty it has 4 inside of it so then again its going to check if there is something inside of the b then returned a + b at this point a value was 7 so its going to say 7 plus 4  that is 11 so its going to pass 11 to that so this cycle run again and again until we reach this point so up until this point the value was 19 so then its gonna have a 19 value over here and its gonna return a function again and then its gonna check if b has something but here b does not have anything so its not gonna go inside of it and its going to return a that is 19 from here so our answer is going to be 19.  

---------------------------------------------------------------------------------------------------

        function result(){
        for(var i = 0; i<3 ; i++){
                setTimeout (function(){
                console.log(i)
                },1000);
        }
        }
        result()

SetTimeOut is basically the web API . Use for after certain amount of time function will form parallary . Here event-loop comes in the picture.It continuously monitor the call stack and call stack queue. If the call stack is empty it will push the function from call stack queue to call stack.
Now the for loop will work.
In the first iteration i=0 it will go inside and print the value and go outside.
In the second iteration value will be 1
In the third iteration value will be 2
Here is forth iteration will happen does not matter i<3 value will be false when the value will iterate. Because the value is equal to 3 not smaller then 3. So it will go outside from the for loop.
That is the reason 3 will print.
But the queue is why it will print 3times 3??

---------------------------------------------------------------------------------------------------
Immediate function invocation(IIF)-

        function result(){
        for(var i = 0; i<3 ; i++){
                setTimeout (function(){
                console.log(i)
                }(),1000+i);
        }
        }
        result()

        O/p - The "callback" argument must be of type function. Received undefined

---------------------------------------------------------------------------------------------------


JavaScript Visualizer 9000 (Real Example we can see on this site)

First going to be console.log(a). We have setTimeout  and setTimeout  is not the part of JS . This is the part of web API  this the part of our browser. setTimeout  will runs when the complete code inside our js file has ran successfully .Even the time inside the setTimeout  0 seconds still it going to run at the very last. So this will go inside of our task queue(call stack queue). promises.resolve it will run also very last of our program. After our complete code inside of our JS has ran but this won’t go inside of our task queue(call stack n    queue) it’s gonna go inside of our micro task queue or the priority queue which again .After that we have console.log(b). Then we will have the output of b. Since  micro task queue or the priority queue has the highest priority than the call stack queue. So this will run first and this will give the output of pro then the output of set.
