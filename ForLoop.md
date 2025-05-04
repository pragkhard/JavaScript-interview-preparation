for...of
----------
* The for...of loop is used to iterate the values of an iterable such as arrays and strings.
* The for...of loop cannot be used to iterate over an object.

for...in
----------
* The for...in loop is used to iterate the keys of an object.
* You can use for...in to iterate over an iterable such as arrays and strings but you should avoid using for...in for iterables.

Example of for...of
------------------------

Traditional For Loop-
----------------------

        let people = ["Harry", "skillup", "Vikrant"];
        for (let index = 0; index < people.length; index++) {
            const element = people[index];
            console.log(element);
        }

Iterate by using for...of loop-
--------------------------------

        let people = ["Harry", "skillup", "Vikrant"];
        for (let name of people) {
            console.log(name);
        }       

Example for...in -
--------------------
Iterate the object by using traditional method -
-----------------------------------------------

        let obj = {
            name: "harry",
            laungage: "hindi",
            location: "Mp"
        }

    
        for (let index = 0; index < Object.keys(obj).length; index++) {
                const element = Object.keys(obj)[index];
                console.log(element);


Iterate the object by using for...in loop -
----------------------------------------------

        let obj = {
            name: "harry",
            laungage: "hindi",
            location: "Mp"
        }

        
            for (let key in obj) {
                const element = obj[key];
                console.log(element);
            }

Iterate the iterator such as array string by using for...in loop but try to avoid using it.
--------------------------------------------------------------------------------------------

        let people = ["Harry", "skillup", "Vikrant"];
        for (let name in people) {
            const element = people[name];
            console.log(element);
        }

OR
---

        let people = ["Harry", "skillup", "Vikrant"];
            for (let name of people) {
                console.log(name);
            }

       
