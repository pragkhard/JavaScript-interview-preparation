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

                        num - current element,
                        i - index,
                        arr - actual element

Question 2: Array.filter()
------------------------------
Explanation: The filter() method creates a new array with all elements that pass the test implemented by the provided function. It returns a filtered array based on the condition specified in the callback function, where only elements that satisfy the condition are included.

        const nums = [1, 2, 3, 4];

        const multiplyThree = nums.filter((num, i, arr) => num > 2); // cb can take num, index and array
        console.log(multiplyThree);

        const multiplyThree = nums.filter((num, i, arr) => {return num > 2 })
        console.log(multiplyThree)

                    num - current element,
                    i - index,
                    arr - actual element

Question 3: Array.reduce()
-----------------------------
Explanation: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It's often used for aggregating data, such as calculating a sum, by iterating through the array and accumulating the results based on the logic in the callback function.

In simple words-
Reducer is use at the place where you have to take all the elements of an array and comeout in the single value.

        const nums = [1, 2, 3, 4];

        const sum = nums.reduce((acc, curr, i, arr) => acc + curr)
        console.log(sum)

        const sum = nums.reduce((acc, curr, i, arr) => {
        return acc + curr;
        }, 0);

        console.log(sum); // 10

                It take callback function and initial value

                acc - accumulator (result of previous computation),
                curr - current element,
                i - index,
                arr - actual element

Polyfill
==============

A polyfill is a piece of code that adds new JavaScript features to older browsers that don't support them. It helps ensure web applications work consistently across different browsers.

Question 4: Map Polyfill
----------------------------
Explanation: This code snippet adds a custom implementation of the map() method to the Array prototype. It mimics the functionality of the native map() method by iterating through the array and applying a callback function to each element to create a new array with the modified values.

        Array.prototype.myMap = function (cb) {
        let temp = [];
        for (let i = 0; i < this.length; i++) {
            temp.push(cb(this[i], i, this));
        }

        return temp;
        };


Question 5: Filter Polyfill
-------------------------------
Explanation: Similar to the Map Polyfill, this code adds a custom implementation of the filter() method to the Array prototype. It iterates through the array and applies a callback function to each element, returning a new array containing only the elements that meet the specified condition in the callback.

        Array.prototype.myFilter = function (cb) {
        let temp = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) temp.push(this[i]);
        }

        return temp;
        };


Question 6: Reduce Polyfill
---------------------------------
Explanation: This snippet introduces a custom implementation of the reduce() method for arrays. It iterates through the array, applying a callback function that performs reduction or aggregation operations, similar to the native reduce() method, and returns the final accumulated result.

        Array.prototype.myReduce = function (cb, initialValue) {
        var accumulator = initialValue;

        for (let i = 0; i < this.length; i++) {
            accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
        }

        return accumulator;
        };



Question 7: map vs foreach
-------------------------------
Explanation: This section compares the usage of map(), forEach(), and traditional for() loops for processing data in an array of student records. It demonstrates how each method can be used to achieve specific tasks, such as transforming data, filtering based on conditions, and aggregating information, highlighting the differences in syntax and approach between these array iteration methods.

-----------------------------------------------------------------------------------------------

        let students = [
        { name: "Piyush", rollNumber: 31, marks: 80 },
        { name: "Jenny", rollNumber: 15, marks: 69 },
        { name: "Kaushal", rollNumber: 16, marks: 35 },
        { name: "Dilpreet", rollNumber: 7, marks: 55 },
        ];

Q1 - Return only the names of students in capital
------------------------------------------------------

Solution 1 : Traditional for() loop
--------------------------------------

        let names = [];
        for (let index = 0; index < studentRecords.length; index++){
            names.push(students[index].name.toUpperCase());
        }

        console.log(names);

Solution 2 : forEach()
-------------------------------

        let names = []
        students.forEach( student => {
            names.push(student.name.toUpperCase());
        })

        console.log(names);

Solution 3 : map() 
-------------------

        let names = students.map( stu => stu.name.toUpperCase());
        console.log(names);


Q2 - we want to get the details of students who scored more than 60 marks.
----------------------------------------------------------------------------

        let names = students.filter(stu => stu.marks > 60);
        console.log(names);


Q3 - Get the details of students who scored more than 60 marks and have rollNumber greater than 15.
---------------------------------------------------------------------------------------------------

        let names = students.filter(stu => stu.marks > 60 && stu.rollNumber > 20)
        console.log(names);


Q4 - Sum total of the marks of the students
---------------------------------------------

        let totalMarks = students.reduce( ((acc,emp) => acc+emp.marks), 0)
        console.log(totalMarks);


Q5 - Get only the names of the students who scored more than 60 marks
--------------------------------------------------------------------------

        let names = students.filter(stu => stu.marks > 50).map(stu => stu.name)
        console.log(names);


Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.
--------------------------------------------------------------------------------------------------

         let totalMarks = students.map((stu)=>{ 
            if(stu.marks < 60){
                stu.marks += 20;  
                // stu.marks = stu.marks + 20;
                }
            return stu;
        }).filter(stu => stu.marks > 60).reduce((acc,curr) => acc+curr.marks, 0);

        console.log(totalMarks);

Map & Foreach
===============
Map does not modify the original array it will return the new array
Foreach does not return the new array , but if you want to modify the original array we want to take the index otherwise it will return undefine        
