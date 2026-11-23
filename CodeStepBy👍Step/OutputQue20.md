Count Vowels in a String
==========================

This video explains a common JavaScript interview question: Given a string, count how many vowels are present in it.
The solution uses a function, a for loop, the includes() method, and a counter variable.
Step-by-step explanation in the same sequence as the video

-------------------------------------
1. Understand the interview question 
-------------------------------------
The interviewer gives you a string and asks you to find the total number of vowels in it.

There are five vowels in the English alphabet:
- A
- E
- I
- O
- U
You need to count how many times these vowels appear in the given string and display the total count.

----------------------
2. Create a function 
----------------------
First, create a function named findVowels.
The function takes one parameter called str, which represents the input string.

                function findVowels(str) {
                    // Logic will be written here
                }


Now, call the function and pass the input string as an argument.
let str = "JavaScript Interview";

findVowels(str);


-----------------------------------------------
3. Iterate through the string using a for loop 
---------------------------------------------
Next, use a for loop to iterate through every character of the string.
               
                for (let i = 0; i < str.length; i++) {
                    console.log(str[i]);
                }


Explanation:
- let i = 0: Start the loop from index 0.
- i < str.length: Continue the loop until the last character.
- i++: Increment the index by one after each iteration.
- str[i]: Access the character at the current index.
The video temporarily uses console.log(str[i]) to verify that every character is being accessed correctly.

-------------------------------------
4. Create a variable to store vowels 
-------------------------------------
Now, create a variable named vowels and store all five vowels in it.

The video includes both lowercase and uppercase vowels because the input string may contain either.
let vowels = "aeiouAEIOU";


For example:
- a and A
- e and E
- i and I
- o and O
- u and U
This ensures that both uppercase and lowercase vowels are counted.

------------------------------
5. Create a counter variable 
-----------------------------

Create another variable named count and initialize it to zero.
let count = 0;

This variable stores the total number of vowels found in the string.

Initially, its value is zero because no characters have been checked yet.

-------------------------------------------------
6. Check whether the current character is a vowel 
-------------------------------------------------

Now, use the includes() method to check whether the current character exists in the vowels string.
                
                if (vowels.includes(str[i])) {
                    count++;
                }


Here is how it works:
- str[i] accesses the current character.
- vowels.includes(str[i]) checks whether that character exists in the vowels string.
- If it exists, the condition returns true.
- count++ increases the counter by one.

For example:
------------ -
                let vowels = "aeiouAEIOU";

                console.log(vowels.includes("a")); // true
                console.log(vowels.includes("b")); // false
                console.log(vowels.includes("E")); // true


If the current character is not a vowel, the counter remains unchanged.

--------------------------
7. Return the final count 
--------------------------

After the for loop finishes, return the count variable.
                            
                            return count;


This ensures that the function returns the total number of vowels found in the input string.

Now, use console.log() to display the returned value.
console.log(findVowels(str));

------------------------
8. Complete the code 
----------------------

The complete implementation shown in the video is:

                    function findVowels(str) {
                        let vowels = "aeiouAEIOU";
                        let count = 0;

                        for (let i = 0; i < str.length; i++) {
                            if (vowels.includes(str[i])) {
                                count++;
                            }
                        }

                        return count;
                    }

                    let str = "JavaScript Interview";

                    console.log(findVowels(str)); // 7


----------------------------------------
9. Understand the output with a dry run
----------------------------------------
Input:
let str = "JavaScript Interview";


The function checks each character and increases the count whenever it finds a vowel.
- Character	Vowel?	Count
- J	No	0
- a	Yes	1
- v	No	1
- a	Yes	2
- S	No	2
- c	No	2
- r	No	2
- i	Yes	3
- p	No	3
- t	No	3
- Space	No	3
- I	Yes	4
- n	No	4
- t	No	4
- e	Yes	5
- r	No	5
- v	No	5
- i	Yes	6
- e	Yes	7
- w	No	7

Final output
7

The string contains seven vowels.

---------------------
10. Video conclusion 
---------------------

At the end, the speaker mentions that these types of JavaScript interview questions are covered in the Sharpener Tech training program. The speaker invites viewers to join the program using the link in the description, bio, or pinned comment.

The video ends by thanking viewers and asking them to like the video, subscribe to the channel, and share their feedback in the comments.

-----------------------------
Important interview concepts
--------------------------- -

- Concept	                      ->                   Purpose
- Function	                      ->                   Encapsulates the vowel-counting logic
- for loop	                      ->                   Iterates through every character
- str.length	                  ->                   Gets the string length
- str[i]	                      ->                   Accesses the current character
- includes()	                  ->                   Checks whether a character is a vowel
- count++	                      ->                   Increases the vowel count
- return count	                  ->                   Returns the final result

- Time complexity: O(n), where n is the length of the input string.
- Space complexity: O(1), because the vowel list and counter use fixed extra space.
Main interview takeaway: Iterate through the string character by character, check whether each character belongs to the vowel list using includes(), increment the counter when a vowel is found, and return the final count.