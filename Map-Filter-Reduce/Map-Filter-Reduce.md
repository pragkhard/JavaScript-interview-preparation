Map, filter and reduce
=========================

Map-Filter-Reduce - Array methods that used to iterate over an array
------------------------------------------------------------------------

Question 1: Array.map()
------------------------
Explanation: The map() method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. It doesn't modify the original array but returns a new modified array based on the callback function's logic.

In simple words-
Map is used to creating the new array from the existing one by applying a function to each one of the element 

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => num * 3); // cb can take num, index and array
console.log(multiplyThree);

const multiplyThree = nums.map((num, i, arr) => {return num * 5})
console.log(multiplyThree)

num - current element
i - index
arr - actual element

Question 2: Array.filter()
------------------------------
Explanation: The filter() method creates a new array with all elements that pass the test implemented by the provided function. It returns a filtered array based on the condition specified in the callback function, where only elements that satisfy the condition are included.

Question 3: Array.reduce()
Explanation: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It's often used for aggregating data, such as calculating a sum, by iterating through the array and accumulating the results based on the logic in the callback function.

Reducer - use at the place where you have to take all the elements of an array and comeout in the single value.

const sum2 = nums.reduce((acc, curr, i, arr) => {
    return acc + curr
}, 0)

It take callback function and initial value
acc - accumulator (result of previous computation)

Polyfill
==============

A polyfill is a piece of code that adds new JavaScript features to older browsers that don't support them. It helps ensure web applications work consistently across different browsers.

Question 4: Map Polyfill
Explanation: This code snippet adds a custom implementation of the map() method to the Array prototype. It mimics the functionality of the native map() method by iterating through the array and applying a callback function to each element to create a new array with the modified values.

Question 5: Filter Polyfill
Explanation: Similar to the Map Polyfill, this code adds a custom implementation of the filter() method to the Array prototype. It iterates through the array and applies a callback function to each element, returning a new array containing only the elements that meet the specified condition in the callback.

Question 6: Reduce Polyfill
Explanation: This snippet introduces a custom implementation of the reduce() method for arrays. It iterates through the array, applying a callback function that performs reduction or aggregation operations, similar to the native reduce() method, and returns the final accumulated result.

Question 7: map vs foreach
Explanation: This section compares the usage of map(), forEach(), and traditional for() loops for processing data in an array of student records. It demonstrates how each method can be used to achieve specific tasks, such as transforming data, filtering based on conditions, and aggregating information, highlighting the differences in syntax and approach between these array iteration methods.
