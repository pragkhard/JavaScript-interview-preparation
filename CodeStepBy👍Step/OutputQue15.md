Count Words in a String in JavaScript 
=======================================

-------------------
Problem statement: 
------------------- -
You are given a string, and you need to calculate how many words it contains.

The important condition is that the string may contain:
- Single spaces between words.
- Multiple consecutive spaces.
- Special characters such as dots (.).
You cannot use any built-in JavaScript functions such as split(). You have to write your own logic using a loop.

-------------------------
1. Create two variables
------------------------
First, create two variables:
let count = 0;
let isWord = false;


Variable 1: count
------------------- -
- It stores the total number of words.
- Initially, its value is 0.

Variable 2: isWord
------------------- -
- It tells us whether we are currently inside a word or not.
- Initially, its value is false.
- When we encounter a non-space character, it becomes true.
- When we encounter a space, it becomes false.

Why do we need isWord?
Because a word can contain multiple characters, and we should count the entire word only once, not count every character as a separate word.

----------------------------------------------------
2. Create a for loop to iterate through the string
-----------------------------------------------------

Now, use a for loop to check every character in the string.

                    let str = "Hello World";

                    for (let i = 0; i < str.length; i++) {
                    // Logic goes here
                    }

Here:
- i = 0 means the loop starts from the first character.
- i < str.length means the loop continues until the end of the string.
- i++ moves to the next character.

Now, we need to check whether the current character is a space or a non-space character.

------------------------------------------------------
3. Check whether the current character is not a space
------------------------------------------------------
Inside the loop, write this condition:

                        if (str[i] !== " ") {
                        // Current character is not a space
                        }


This checks whether the current character is different from a space.

If it is not a space, increase the word count:
count++;


However, there is one problem.
If we increase count for every non-space character, we will count characters instead of words.
For example, in "Hello", the count would become 5, but we need the word count to be 1.
So, we need to check whether a new word has started.

--------------------------------------------------
4. Use isWord to identify the beginning of a word
---------------------------------------------------

When we encounter a non-space character, it means a word has started.

We set:
isWord = true;


But we should increase the count only when we enter a new word, not for every character.

                The correct condition is:
                if (str[i] !== " " && isWord === false) {
                count++;
                isWord = true;
                }


Let's understand this:
----------------------- -

- str[i] !== " " checks whether the current character is not a space.
- isWord === false checks whether we were previously outside a word.
- If both conditions are true, a new word has started.
- Increase count by one.
- Set isWord = true because we are now inside a word.
Once isWord becomes true, the remaining characters of that word will not increase the count again.

----------------------------
5. Check when a word ends
-----------------------------
Now, when does a word end?
A word ends when we encounter a space.

So, we write another condition:

                    if (str[i] === " ") {
                    isWord = false;
                    }


This means:
- When a space is encountered, the current word has ended.
- Set isWord back to false.
- Now, when the next non-space character appears, a new word will be counted.
This logic also handles multiple consecutive spaces correctly.

-----------------------------
6. Complete JavaScript code
-----------------------------

Combining all the conditions, the complete solution is:

                    let str = "Hello World JavaScript Interview";

                    let count = 0;
                    let isWord = false;

                    for (let i = 0; i < str.length; i++) {

                    if (str[i] !== " " && isWord === false) {
                        count++;
                        isWord = true;
                    }

                    if (str[i] === " ") {
                        isWord = false;
                    }
                    }

                    console.log(count);

                    Output: 4
                    4

--------------------------------------------
7. Understand the iteration step by step
--------------------------------------------
Let's take a simple example:
let str = "Hi  Anil";


Notice that there are two spaces between Hi and Anil.

Initially:
count = 0;
isWord = false;

Final output:
2


The important point: Multiple spaces do not increase the word count because spaces only reset isWord to false.

----------------------------------
8. Test with different strings
----------------------------------
The video also demonstrates testing the logic with different inputs.

Example 1: Normal sentence
let str = "Hello Anil How Are You";


Output:
5


Example 2: Multiple spaces
let str = "Hello     Anil     How Are You";


Output:
6


Example 3: Special characters
let str = "Hello Anil.";


Output:
2


The dot (.) is also counted as part of the word Anil. because it is not a space.

Important: This solution treats every sequence of non-space characters as one word. It does not separately identify punctuation.

--------------------------------
9. Important interview concepts
----------------------------------

- Concept	                    ->            Explanation
- count	                        ->            Stores the total number of words
- isWord	                    ->            Tracks whether we are currently inside a word
- str[i]	                    ->            Accesses the current character
- str[i] !== " "	            ->            Checks whether the character is not a space
- str[i] === " "	            ->            Detects the end of a word
- isWord = true	                ->            Indicates that a word has started
- isWord = false	            ->            Indicates that we are outside a word

Time Complexity: O(n), because we visit each character once.
Space Complexity: O(1), because we use only two additional variables.

----------------------------------
10. Interview question – Practice
-------------------------------------

Question: Given a string, write a JavaScript function to count the total number of words without using any built-in string methods.

Input:
"Hello     Anil   How Are You"


Expected output:
5


Constraints:
1. Do not use split().
2. The string may contain multiple consecutive spaces.
3. Count words, not individual characters.
4. A word is defined as a sequence of non-space characters.
5. Handle an empty string and strings containing only spaces.
Interview takeaway: The key concept in this question is using a Boolean variable (isWord) to detect the transition from a space to a word. This ensures that each word is counted only once, regardless of how many characters or consecutive spaces it contains.