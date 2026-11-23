String to Lowercase Without Built-in Function 
===============================================

This video explains a JavaScript interview question in which you are given a string containing uppercase and lowercase letters. Your task is to convert all uppercase letters into lowercase letters without using the built-in toLowerCase() function.

The interviewer expects you to write your own function and use character codes to perform the conversion.

------------------------
1. Interview question 
--------------------------

You are given a string such as:
let str = "HELLO";

You need to convert all uppercase characters into lowercase characters.

Expected output:
hello

Condition: Do not use the built-in toLowerCase() method. Implement the conversion manually.

----------------------
2. Create a function 
------------------------

First, create a function named convertInSmall that accepts a string as its parameter.

                function convertInSmall(str) {
                    // Logic will go here
                }

                let result = convertInSmall("HELLO");
                console.log(result);


Here:
- convertInSmall is the function name.
- str is the input string.
- The function will process each character and return the converted string.

-----------------------------------
3. Iterate through each character 
-------------------------------------
Use a for loop to access every character in the string.

                for (let i = 0; i < str.length; i++) {
                    console.log(str[i]);
                }


                Output:
                H
                E
                L
                L
                O


- str.length gives the total number of characters.
- str[i] accesses the character at the current index.
- The loop processes each character one by one.

-------------------------------------------------
4. Understand character codes using charCodeAt() 
--------------------------------------------------

Every character has a numeric character code in JavaScript.

To get the character code, use:
str.charCodeAt(i);


For example:

                console.log("A".charCodeAt(0)); // 65
                console.log("Z".charCodeAt(0)); // 90

                console.log("a".charCodeAt(0)); // 97
                console.log("z".charCodeAt(0)); // 122


                The important ASCII ranges are:
                Character range	Character codes
                Uppercase A–Z	65–90
                Lowercase a–z	97–122

                How uppercase and lowercase codes are related
                A
                65
                Uppercase
                +32

                a
                97
                Lowercase

The difference between corresponding uppercase and lowercase English letters is 32 in ASCII.

-------------------------------------------
5. Check whether the character is uppercase 
-----------------------------------------------

Store the character code in a variable and check whether it falls between 65 and 90.
let code = str.charCodeAt(i);

                if (code >= 65 && code <= 90) {
                    // Character is uppercase
                }


Why do we check this range?
- 65 represents uppercase A.
- 90 represents uppercase Z.
- If the character code falls between 65 and 90, it is an uppercase English letter.
For example:
- H has code 72 → uppercase.
- E has code 69 → uppercase.
- a has code 97 → already lowercase.

------------------------------------
6. Convert uppercase to lowercase
-------------------------------------

Now create an empty string named result.
let result = "";


If the character is uppercase, add 32 to its character code.
result += String.fromCharCode(code + 32);


What does String.fromCharCode() do?
It converts a numeric character code back into its corresponding character.

For example:
let code = 72;

console.log(code + 32); // 104
console.log(String.fromCharCode(104)); // h


Step by step:
-------- -----
1. The uppercase character H has character code 72.
2. Add 32 to 72, which gives 104.
3. String.fromCharCode(104) converts 104 into h.
4. Add h to the result string.
This is how the conversion happens without using toLowerCase().
7. Handle characters that are not uppercase (2:22 – 2:37)
If the character code is not between 65 and 90, keep the original character unchanged.
else {
    result += str[i];
}


This is important because:
---------- -----------------
- Already lowercase letters should remain lowercase.
- Numbers should remain unchanged.
- Spaces and special characters should remain unchanged.
Finally, return the result.
return result;


-----------------------------
8. Complete JavaScript code
------------------------------

            function convertInSmall(str) {
                let result = "";

                for (let i = 0; i < str.length; i++) {
                    let code = str.charCodeAt(i);

                    if (code >= 65 && code <= 90) {
                        result += String.fromCharCode(code + 32);
                    } else {
                        result += str[i];
                    }
                }

                return result;
            }

            console.log(convertInSmall("HELLO"));
            // hello

            console.log(convertInSmall("Hello World"));
            // hello world

            console.log(convertInSmall("JAVASCRIPT123"));
            // javascript123


--------------------------------------
9. Dry run – How does the code work? 
--------------------------------------

Let's take this input:
let str = "HELLO";


The function processes each character:
--------------------------------------- -

Character ->	 Charactercode	->   Condition	   ->  Convertedcharacter
H	      ->      72	        ->    Uppercase	   ->       h (104)
E	      ->      69	        ->    Uppercase	   ->       e (101)
L	      ->      76	        ->    Uppercase	   ->       l (108)
L	      ->      76	        ->    Uppercase	   ->       l (108)
O	      ->      79	        ->    Uppercase	   ->       o (111)

The result is built character by character:
"" → "h" → "he" → "hel" → "hell" → "hello"


Final output
hello


---------------------------------
10. Important interview concepts
---------------------------------
JavaScript method/property	             ->                               Purpose
str.length	                             ->                       Gets the length of a string
str[i]	                                 ->                       Accesses a character by index
charCodeAt(i)	                         ->                       Gets the numeric character code
String.fromCharCode(code)	             ->                       Converts a character code into a character
result += value	                         ->                       Appends a character to a string

Time complexity: O(n), because we iterate through the string once.
Space complexity: O(n), because we create a new result string.

Important note: This solution works for standard English ASCII letters. It does not implement full Unicode lowercase conversion, which can involve characters outside the ASCII ranges and sometimes one-to-many character mappings.

Interview takeaway: The main concept is understanding character codes and using charCodeAt() and String.fromCharCode() to convert uppercase English letters into lowercase without using the built-in toLowerCase() method.