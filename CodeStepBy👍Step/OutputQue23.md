Merge Objects Without Built-in Methods
=======================================

There are two logical questions and one tricky interview question.

--------------------------------------------------------
1. Merge two objects without using built-in functions
------------------------------------------------------------
Interview question: Given two objects, merge them into a third object without using any built-in functions such as Object.assign() or the spread operator.

For example, consider these two objects:
                           
                            let obj1 = {
                                a: 10,
                                b: 20,
                                c: 30,
                                d: 40
                            };

                            let obj2 = {
                                d: 50,
                                e: 60,
                                f: 70
                            };


We need to merge both objects into a third object called obj3.

The instructor creates an empty object:

                            let obj3 = {};

                            Then, a for...in loop is used to iterate through the keys of the first object.
                            for (let item in obj1) {
                                obj3[item] = obj1[item];
                            }


Explanation:
----------- 
-
- for...in iterates through the enumerable keys of an object.
- item represents the current key.
- obj1[item] accesses the value associated with that key.
- obj3[item] = obj1[item] copies the key and its value into the third object.

After this loop, obj3 contains all the properties of obj1.
Next, the same process is repeated for the second object:

                            for (let item in obj2) {
                                obj3[item] = obj2[item];
                            }


Now, all the properties from both objects are copied into obj3.

Important: 
------- ---
If both objects contain the same key, the value from the second object overwrites the value from the first object.

For example, both objects contain the key d. Therefore, its final value will be 50, not 40.

The merged object will be:
{
    a: 10,
    b: 20,
    c: 30,
    d: 50,
    e: 60,
    f: 70
}

---------------------------------------------------
2. Remove duplicate keys while merging two objects
-----------------------------------------------------

The second question is about handling duplicate keys.

In the above example, the key d exists in both objects:
                               
                                obj1 = {
                                    a: 10,
                                    b: 20,
                                    c: 30,
                                    d: 40
                                };

                                obj2 = {
                                    d: 50,
                                    e: 60,
                                    f: 70
                                };


When we merge these objects, JavaScript automatically keeps only one occurrence of the key d.
This happens because object keys must be unique.
The value of d is updated to 50 because the second object's value overwrites the first object's value.
Therefore, the final merged object contains six unique keys:
{
    a: 10,
    b: 20,
    c: 30,
    d: 50,
    e: 60,
    f: 70
}


Key interview concept: When you assign a value to an existing object key, JavaScript updates that key's value instead of creating another occurrence of the same key.

---------------------------------------------------------------------
3. Count the total number of unique keys without using an extra loop
-----------------------------------------------------------------------
This is the tricky interview question.

The requirement is to count the total number of unique keys in the merged object without running an additional loop.

The instructor initially creates a counter:

                        let count = 0;

                        Then, the instructor increments the counter inside both loops.
                        for (let item in obj1) {
                            obj3[item] = obj1[item];
                            count++;
                        }

                        for (let item in obj2) {
                            obj3[item] = obj2[item];
                            count++;
                        }


However, this approach produces an incorrect result.

Why does it produce the wrong count?
----------------------------- ---------

Let's understand the loop execution:
- The first object contains four keys, so the first loop runs four times.
- The second object contains three keys, so the second loop runs three times.
- The counter is incremented seven times in total.

Initial counting result
First object

4 iterations
Second object

3 iterations

Counter result
7

But the merged object contains only 6 unique keys because d is duplicated.

The problem is that the counter increments even when the key already exists in obj3.
Correct approach: Check whether the key already exists
To solve this problem, the instructor adds a condition using the in operator.

                if (!(item in obj3)) {
                    count++;
                }


Explanation:
------------- --
- item in obj3 checks whether the current key already exists in obj3.
- ! reverses the condition.
- Therefore, !(item in obj3) means the key does not exist in obj3.
- Only when the key is new do we increment the counter.
- If the key already exists, the counter is not incremented.
This ensures that duplicate keys are counted only once.

--------------------------
4. Complete working code
---------------------------

Here is the complete solution combining all three questions:
                                let obj1 = {
                                    a: 10,
                                    b: 20,
                                    c: 30,
                                    d: 40
                                };

                                let obj2 = {
                                    d: 50,
                                    e: 60,
                                    f: 70
                                };

                              
                              
 --------------------------------------------------------------------                             
                                let obj3 = {};
                                let count = 0;

                                // Iterate through the first object
                                for (let item in obj1) {
                                    if (!(item in obj3)) {
                                        count++;
                                    }

                                    obj3[item] = obj1[item];
                                }

                                // Iterate through the second object
                                for (let item in obj2) {
                                    if (!(item in obj3)) {
                                        count++;
                                    }

                                    obj3[item] = obj2[item];
                                }

                                console.log("Merged Object:", obj3);
                                console.log("Total Unique Keys:", count);


                                Output:
                                Merged Object: {
                                    a: 10,
                                    b: 20,
                                    c: 30,
                                    d: 50,
                                    e: 60,
                                    f: 70
                                }

                                Total Unique Keys: 6

-------------------------
5. Step-by-step dry run
---------------------------

Let's understand how the counter works.

First loop – obj1
Current key	Already exists in obj3?	Count
a	No	1
b	No	2
c	No	3
d	No	4

After the first loop, obj3 contains a, b, c, d, and the count is 4.

Second loop – obj2
Current key	Already exists in obj3?	Count
d	Yes	4
e	No	5
f	No	6

When the second loop encounters d, it already exists in obj3, so the counter does not increase. However, its value is still updated to 50.

The final count is 6 unique keys.
