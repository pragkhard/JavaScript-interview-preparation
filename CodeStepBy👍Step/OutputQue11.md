Convert Object Keys to Array | 3 Ways | JS Shorts
====================================================

                                        const data = {
                                        name: "Pragati",
                                        age: 30,
                                        email: "pragati@gmail.com"
                                        };

                                        // Method 1: Object.keys()
                                        let keys1 = Object.keys(data);

                                        // Method 2: for...in with index
                                        let keys2 = [];
                                        let index = 0;

                                        for (let k in data) {
                                        keys2[index] = k;
                                        index++;
                                        }

                                        // Method 3: for...in without index
                                        let keys3 = [];

                                        for (let k in data) {
                                        keys3[keys3.length] = k;
                                        }

                                        console.log(keys1);
                                        console.log(keys2);
                                        console.log(keys3);


We have an object named data. It contains three keys, and each key has a corresponding value.
Our task is to extract all the keys from the object and store them in a separate array.

We will learn three methods:
1. Using the built-in JavaScript method.
2. Using a for...in loop with an extra variable.
3. Using a for...in loop without an extra variable.

-------------------------------
Method 1 – Using Object.keys()
------------------------------ -

First, we will solve the problem using the built-in JavaScript method.
Create a variable called keys and use Object.keys().

                                        const data = {
                                        name: "Pragati",
                                        age: 30,
                                        email: "pragati@gmail.com"
                                        };

                                        let keys = Object.keys(data);

                                        console.log(keys);


                                        Output
                                        ["name", "age", "email"]


Explanation:
-- ----------
Object.keys() is a built-in JavaScript method.
When we pass an object to Object.keys(), it returns an array containing all the object's own enumerable string keys.
So, we get name, age, and email inside an array.
This is the simplest and default method.

------------------------------------------------------
Method 2 – Using for...in loop with an extra variable
----------------------------------------------------- -

Now, let's solve the same problem manually without using the built-in method.
First, create an empty array called keys.
Then, create another variable called index and initialize it with 0.
                                       
                                        let keys = [];
                                        let index = 0;


After that, use a for...in loop to iterate through the object.
                                       
                                        for (let k in data) {
                                        keys[index] = k;
                                        index++;
                                        }

                                        console.log(keys);


Explanation:
- for...in iterates through the object's enumerable string keys.
- k represents the current key.
- keys[index] = k stores the key at the current array index.
- index++ increments the index after every iteration.

Initially, the index is 0, so the first key is stored at index 0. Then the next keys are stored at index 1 and 2.
Output
["name", "age", "email"]

--------------------------------------------------------
Method 3 – Using for...in loop without an extra variable
----------------------------------------------------- ----
Now, let's look at the third method.
This is a simpler version of the previous approach because we don't need an extra index variable.

Instead, we can use the current length of the keys array.
                                           
                                            let keys = [];

                                            for (let k in data) {
                                            keys[keys.length] = k;
                                            }

                                            console.log(keys);


Explanation:
- Initially, keys.length is 0.
- The first key is stored at index 0.
- After adding the first key, the length becomes 1.
- The second key is stored at index 1.
- The third key is stored at index 2.
The array length automatically increases whenever we add a new element.
Output
["name", "age", "email"]