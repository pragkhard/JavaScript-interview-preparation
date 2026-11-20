Print Nested Object Keys Using Recursion
==========================================

Question - 
--------- -

                                const company = {
                                name: "ABC Company",
                                department: {
                                    name: "Engineering",
                                    employee: {
                                    id: 101,
                                    role: "Frontend Developer",
                                    address: {
                                        city: "Bangalore",
                                        country: "India"
                                    }
                                    }
                                }
                                };


Solution-
-- --------

                                function extract(obj) {
                                for (let key in obj) {
                                    if (typeof obj[key] === "object" && obj[key] !== null) {
                                    extract(obj[key]);
                                    } else {
                                    console.log(key + ": " + obj[key]);
                                    }
                                }
                                }

                                extract(company);


Output-
-------- -
                                name: ABC Company
                                name: Engineering
                                id: 101
                                role: Frontend Developer
                                city: Bangalore
                                country: India



Understand the requirement:
--------------------------- --

In this example, we have three levels:
1. Company
2. Department
3. Employee
But the requirement is not limited to three levels.

The object could have:
- Two levels
- Three levels
- Four or five levels
- Even ten levels
We need to create one common function that can iterate through any nested object.

We should not write separate loops for every level. For example, we should not write four loops for four levels or three loops for three levels.                                

--------------------------------- -----
Step 1 – Create a common function
--------------------------------- -----

First, create a function called extract.
Then call this function and pass the company object as an argument.

                                    function extract(obj) {
                                    // Logic will be written here
                                    }

                                    extract(company);


Here, obj represents the object passed to the function.

--------------------------------- -----
Step 2 – Use a for...in loop
--------------------------------- -----

Now, use a for...in loop to iterate through the object's keys.

                                function extract(obj) {
                                for (let key in obj) {
                                    console.log(key + ": " + obj[key]);
                                }
                                }


Here:
- key represents the current key of the object.
- obj[key] accesses the value associated with that key.

For example, if the object contains name: "ABC", the output will be:
                              
                              name: ABC


-----------------------------------------------
Step 3 – Check whether the value is an object
----- -------------------------------------------

When we run the code, we can see that the first key is name, followed by department.
But we don't want to print the entire nested object directly. We want to iterate through its inner keys separately.
So, we apply a condition using typeof.


                            function extract(obj) {
                            for (let key in obj) {
                                if (typeof obj[key] === "object") {
                                // Do not print the nested object directly
                                } else {
                                console.log(key + ": " + obj[key]);
                                }
                            }
                            }


This condition checks whether the current value is an object.
- If the value is an object, we skip printing it directly.
- Otherwise, we print the key and its value.

-----------------------------------------------
Step 4 – Use recursion
------------------------------ -----------------

Now comes the most important part.
If the current value is another object, we need to call the same extract() function again and pass that inner object to it.
This technique is called recursion.


                            function extract(obj) {
                            for (let key in obj) {
                                if (typeof obj[key] === "object" && obj[key] !== null) {
                                extract(obj[key]);
                                } else {
                                console.log(key + ": " + obj[key]);
                                }
                            }
                            }

---------------------
How does it work?
---------------- --
1. First, the function iterates through the company object.
2. When it finds the department object, it calls extract() again.
3. Inside the department, it finds the employee object.
4. It calls the same function again.
5. Finally, it prints the employee's keys and values.
This process continues until there are no more nested objects.

-----------------------------------------------
Step 5 – Add another nested object
--------------------------------- --------------


Now, suppose we add another object called address inside the employee object.
It contains two keys: city and country.
Even after adding another nested level, we don't need to change our function.
The same recursive function automatically extracts all the keys and values.


-----------------------------------------
Important interview concept – Recursion
------------------------------------- ---
What is recursion?
Recursion is a technique in which a function calls itself to solve a problem.

In this example:
extract(obj[key]);


The function calls itself whenever it finds another nested object.
This allows us to handle objects with any number of nested levels without writing multiple loops.

-----------------------------
Important points to remember
------------------------- -----

1. for...in is used to iterate through object keys.
2. obj[key] is used to access the value of a key.
3. typeof checks whether a value is an object.
4. Recursion handles nested objects at multiple levels.
5. We use obj[key] !== null because JavaScript returns "object" for typeof null as well.