Optional Chaining & Nullish Coalescing
==========================================

----------------------------------
1. Understand the given object
----------------------------------

We have an object called user. Inside this object, there are two properties: address and city.

                    const user = {
                    address: {
                        city: "Delhi"
                    }
                    };


                    To access the city, we can write:
                    console.log(user.address.city);


                    Output:
                    Delhi

-----------------------------
However, there is a problem.
------------------------- ----

What happens if the address property or the city property is missing?

                    For example:
                    const user = {
                    // address is missing
                    };

                    console.log(user.address.city);


                    Output:
                    TypeError: Cannot read properties of undefined


This happens because JavaScript cannot access city from an undefined value.

To prevent this error, developers often use if conditions.

-------------------------------------------------------------------------------------
2. First interview question – How can we write the if condition in shorter code?
-------------------------------------------------------------------------------------

Suppose we want to check whether user, address, and city exist before accessing the city.

A traditional approach is:

                    if (user && user.address && user.address.city) {
                    console.log(user.address.city);
                    }

Here:
- user checks whether the user object exists.
- user.address checks whether the address property exists.
- user.address.city checks whether the city property exists.
- Only if all conditions are truthy, JavaScript executes the console.log() statement.

--------------------------
The interviewer asks:
------------------------- -
Can we write this condition using less code?

Yes! We can use Optional Chaining (?.).
Optional Chaining (?.)
Instead of writing multiple conditions, we can write:

                    console.log(user?.address?.city);

                    Output:
                    Delhi

The ?. operator checks whether the value before it is null or undefined.

- If the value exists, JavaScript continues accessing the next property.
- If the value is null or undefined, JavaScript stops evaluating that property chain and returns undefined.
- It does not throw an error because of that missing property.

---------------------------------
Example 1: All properties exist
--------------------- ------------

                        const user = {
                        address: {
                            city: "Delhi"
                        }
                        };

                        console.log(user?.address?.city);


                        Output:
                        Delhi


--------------------------------
Example 2: Address is missing
------------------------------- -

                        const user = {};

                        console.log(user?.address?.city);


                        Output:
                        undefined


                        There is no error.

------------------------------
Example 3: City is missing
----------------------------- -
                       
                        const user = {
                        address: {}
                        };

                        console.log(user?.address?.city);


                        Output:
                        undefined


Again, there is no error.

First question solved
Interview takeaway: Optional chaining (?.) allows you to safely access nested object properties without writing multiple if conditions.

-------------------------------------------------------------------------------------------
3. Second interview question – How can we write the if-else condition in shorter code?
-------------------------------------------------------------------------------------------

Now, let's move to the second question.

Suppose we want to check whether user, address, and city exist.
- If they exist, print the city.
- If any required property is missing, print a default message such as "Something went wrong".

Using the traditional if-else approach:
------------------------------------- --

                    if (user && user.address && user.address.city) {
                    console.log(user.address.city);
                    } else {
                    console.log("Something went wrong");
                    }


The interviewer asks:
Can we write this entire if-else condition in a shorter way?
Yes! We can combine Optional Chaining (?.) with the Nullish Coalescing Operator (??).

----------------------------------------------------
4. Understand the Nullish Coalescing Operator (??)
-----------------------------------------------------
The speaker explains that the double question mark (??) provides a default value.

We can write:
                console.log(user?.address?.city ?? "Something went wrong");


Let's understand how it works.
- First, user?.address?.city safely tries to access the city.
- If the city exists and is not null or undefined, it returns the city.
- If the result is null or undefined, the ?? operator returns the default message "Something went wrong".

---------------------------------
Example 1: All properties exist
-------------------------------- -

                    const user = {
                    address: {
                        city: "Delhi"
                    }
                    };

                    console.log(user?.address?.city ?? "Something went wrong");

                    Output:
                    Delhi

Because the city exists, the default message is not printed.


--------------------------------
Example 2: Address is missing
--------------------------- -----

                    const user = {};

                    console.log(user?.address?.city ?? "Something went wrong");

                    Output:
                    Something went wrong


Because address is missing, Optional Chaining returns undefined, and ?? provides the default message.

-----------------------------
Example 3: City is missing
------------------------ -----

                    const user = {
                    address: {}
                    };

                    console.log(user?.address?.city ?? "Something went wrong");

                    Output:
                    Something went wrong

The city is undefined, so the default value is printed.
Second question solved

--------------------------------------------------
5. Understand the difference between ?. and ??
----------------------------------------------------

These two operators have different responsibilities.

- Operator	     ->                           Purpose                 	                    ->                     Example
- ?.	         ->               Safely accesses nested properties	                        ->                 user?.address?.city
- ??	         ->   Provides a default value if the result is null or undefined	        ->                     city ?"Unknown"

The easiest way to remember:
- ?. prevents errors when accessing missing properties.
- ?? provides a fallback value when something is null or undefined.

----------------------------------------------
6. Important difference between || and ??
------------------------------------------------

This is another common JavaScript interview topic.

Consider:
                    let city = "";

                    console.log(city || "Unknown");
                    console.log(city ?? "Unknown");


                    Output:
                    Unknown


Why?

Because:
- || returns the default value when the left side is any falsy value, such as 0, false, "", null, or undefined.
- ?? returns the default value only when the left side is null or undefined.
More examples:

| Value | value || "Default" | value ?? "Default" |
|---|---|---|
| 0 | "Default" | 0 |
| false | "Default" | false |
| "" | "Default" | "" |
| null | "Default" | "Default" |
| undefined | "Default" | "Default" |
| "Delhi" | "Delhi" | "Delhi" |

This difference is very important in real-world React and JavaScript development.

---------------------------------------------
7. Complete code combining both concepts
--------------------------------------------


                        const user = {
                        address: {
                            city: "Delhi"
                        }
                        };

                        // First question: Optional Chaining
                        console.log(user?.address?.city);

                        // Second question: Optional Chaining + Nullish Coalescing
                        console.log(
                        user?.address?.city ?? "Something went wrong"
                        );


                        Output:
                        Delhi
                        Delhi


If the address or city is missing, the first statement returns undefined, while the second statement prints "Something went wrong".

------------------------------------------------
8. Important interview questions for practice
------------------------------------------------

Question 1: What is Optional Chaining in JavaScript, and how does it help when accessing nested object properties?

Question 2: What is the Nullish Coalescing Operator in JavaScript, and how can you use it to provide a default value?

Question 3: What is the difference between || and ???

Question 4: What will be the output?

                            const user = {
                            address: {
                                city: ""
                            }
                            };

                            console.log(user?.address?.city ?? "Unknown");

                            Answer: Empty string


Because an empty string is neither null nor undefined, the ?? operator returns the empty string instead of "Unknown".

-------------------------------
9. Final interview takeaways
------------------------------

1. Optional Chaining (?.) safely accesses nested object properties.
2. It returns undefined if the value before the optional chain is null or undefined.
3. Nullish Coalescing (??) provides a fallback value when the result is null or undefined.
4. You can combine both operators to replace lengthy if-else conditions.
5. Remember that ?? and || behave differently for values such as 0, false, and empty strings.

Most important code to remember:
console.log(user?.address?.city ?? "Something went wrong");

This is a useful pattern when working with nested API responses and optional data in React applications.