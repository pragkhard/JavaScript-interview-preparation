Rest and Spread operator in ES6?
----------------------------------
* Rest spread operator provides a new way to manipulate array and object in ES6
* Rest spread operator is represented by … followed by the variable name.

Rest-
--------
* Used to merge a list of function arguments into an array.   OR
* Rest operator allows us to collects all the remaining elements into an array.

Spread-
----------
* Used to split up array or object properties.         OR
* The spread operator allows to spread the value of an array(or any iterable) into single arguments/elements.

Example of Rest with Array
--------------------------
        Element pass kr rahe vo combine ho jaate hai 

        function add(a, b, c, ...others) {
            console.log(others);
            console.log(others[0]);
            return a + b + c;
        }
        let res = add(2, 3, 4, 8, 9);
        console.log(res);

        O/p - 8 9


Example of Spread with Array
--------------------------------
        combine ko divide karege 

        var names = ["Pragati", "Shubhi", "Simmi"];
        function getNames(name1, name2, name3) {
            console.log(name1, name2, name3)
        }
        getNames(names[0], names[1], names[2]);
        getNames(...names);
        getNames(names);

        O/p - Pragati Shubhi Simmi


Example of Rest with Object
-----------------------------

        var students = {
            name: "Ajay",
            age: "28",
            hobbies: ["dancing", "cooking"]
        }
        const { ...rest } = students;
        console.log(rest);

       O/p - { name: 'Ajay', age: '28', hobbies: [ 'dancing', 'cooking' ] }

Example of Spread with Object
---------------------------------

        var students = {
            name: "Ajay",
            age: "28",
            hobbies: ["dancing", "cooking"]
        }

        var newStudent={
            ...students,
            age:"29"
        }
        console.log(newStudent);

        O/p - { name: 'Ajay', age: '29', hobbies: [ 'dancing', 'cooking' ] }