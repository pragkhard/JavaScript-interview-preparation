 Calculate String Length Without length Property
 ===================================================

 Interview question: 
 --------------------
 Given a string, calculate its length without using the built-in length property or any predefined JavaScript method to calculate the length.

The video demonstrates two approaches:
1. Using a for...of loop.
2. Using a while loop.

---------------------------------------
1. Understand the interview question
--------------------------------------
You are given a string, and you need to calculate the total number of characters present in it.

For example:
                        let str = "Hello World";

                        Expected output:
                        11

You should not use JavaScript's built-in length calculation. Instead, create your own function to count the characters.

-----------------------
2. Create a function
------------------------
First, create a function named checkLength.
Pass the input string as a parameter named str.

                    function checkLength(str) {
                        // Logic will go here
                    }

You can choose any function name, but the video uses checkLength.

------------------------------------
3. Initialize a counter variable
-------------------------------------
Inside the function, create a variable named count and initialize it to zero.
            
                    let count = 0;

This variable will store the total number of characters.
Initially, the count is zero because we haven't iterated through any characters yet.

--------------------------------------------
4. First approach – Using a for...of loop
--------------------------------------------
The speaker uses a for...of loop to iterate through each character of the string.

                    for (let x of str) {
                        count++;
                    }

How does this work?
-----------------------
- for...of iterates through the values of an iterable, such as a string.
- x represents the current character.
- Each time the loop runs, count++ increases the counter by one.
- Once all characters have been processed, the loop stops.

For example, if the input is "Hello":
---------------------------------------
- Iteration	    |     Character (x)	    |    Count
- 1	            |         H	            |        1
- 2	            |         e	            |        2
- 3	            |         l	            |        3
- 4	            |         l	            |        4
- 5	            |         o	            |        5

After the loop finishes, return the count.
                
                return count;

---------------------------------------------
5. Call the function and check the output
--------------------------------------------
Use console.log() to call the function and display the returned value.

                console.log(checkLength("Hello World"));
                Output:
                11

The string contains 11 characters, including the space.

-----------------------------------------
6. Second approach – Using a while loop
-----------------------------------------
Now the speaker demonstrates another way to calculate string length.
Instead of using a for...of loop, use a while loop.
The idea is to keep accessing characters by their index until JavaScript returns undefined.

                    let count = 0;

                    while (str[count] !== undefined) {
                        count++;
                    }


How does this work?
--------------------
1. Initially, count = 0.
2. str[count] accesses the character at the current index.
3. If the character exists, the condition is true and the loop executes.
4. count++ increases the index by one.
5. The process continues until the index reaches a position where no character exists.
6. At that point, str[count] returns undefined, so the loop stops.

                For example, consider:
                let str = "Hello";


- Count	str[count]	  |   Condition	          |  Action
- 0	H	              |   Not undefined	      |  Increment
- 1	e	              |   Not undefined	      |  Increment
- 2	l	              |   Not undefined	      |  Increment
- 3	l	              |   Not undefined	      |  Increment
- 4	o	              |   Not undefined	      |  Increment
- 5	undefined	      |   False	              |  Stop

After the loop finishes, count is 5.

Return the count:
return count;

Important: The video uses !== undefined to check whether a character exists at the current index.

------------------------------------
7. Complete code – Both approaches
--------------------------------------

Approach 1: Using for...of
----------------- -----------

                        function checkLength(str) {
                            let count = 0;

                            for (let x of str) {
                                count++;
                            }

                            return count;
                        }

                        console.log(checkLength("Hello World")); // 11
                        console.log(checkLength("Anil Sethi"));  // 10

Approach 2: Using while loop
------------------ -----------

                        function checkLength(str) {
                            let count = 0;

                            while (str[count] !== undefined) {
                                count++;
                            }

                            return count;
                        }

                        console.log(checkLength("Hello World")); // 11
                        console.log(checkLength("Anil Sethi"));  // 10

Both approaches produce the same output for ordinary English text.

-------------------------------
8. Video examples and results
--------------------------------
The speaker tests the second approach with another string:
                   
                    console.log(checkLength("Anil Sethi"));

                    Output:
                    10


The string contains 10 characters, including the space.
At the end, the speaker mentions that more JavaScript interview questions are available on the channel and asks viewers to like the video, subscribe, and share feedback in the comments.

-----------------------------------
9. Important interview concepts
-----------------------------------

  Concept	            ->                            Explanation
- for...of	            ->              Iterates through each character of a string
- while	                ->              Repeats execution while a condition is true
- count++	            ->                  Increments the counter by one
- str[count]	        ->                  Accesses the character at a specific index
- undefined	            ->              Returned when accessing an out-of-range string index
- return count	        ->              Returns the calculated character count

- Time complexity: O(n) for both approaches.
- Space complexity: O(1) auxiliary space for both approaches.

Important technical clarification: The two approaches are not exactly equivalent for every Unicode string. for...of counts Unicode code points, whereas str[count] accesses UTF-16 code units. For example, an emoji such as "😊" is counted as one by for...of, but two by the while approach.

Interview takeaway: The key concept is that you can calculate the number of characters by iterating through a string and incrementing a counter, without using the built-in .length property.