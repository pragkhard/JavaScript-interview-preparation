What is set in ES6?
-----------------------
* Set is the collection of well-defined objects.
* Set store the unique values. (It preserved the unique values)
* Means it will not repeat/ count the values.
--------------------------------------------------------------------   
Methods & Description -
---------------------
        new Set()	    -        Creates a new Set
        add()    	    -        Adds a new element to the Set
        delete()  	    -        Removes an element from a Set
        has()	        -        Returns true if a value exists
        clear()	        -        Removes all elements from a Set
        forEach()	    -        Invokes a callback for each element
        values()	    -        Returns an Iterator with all the values in a Set
        keys()	        -        Same as values()
        entries()	    -        Returns an Iterator with the [value,value] pairs from a Set

-------------------------------------------------------------------------
        const mySet = new Set();
        console.log('The set looks like:', mySet);

Adding value to this set -
-------------------------

        mySet.add('this');
        mySet.add('My Name');
        mySet.add('this');
        mySet.add('that');
        mySet.add(345);
        mySet.add(true);
        console.log('The set looks like this', mySet);

Use a constructor to initialize the set -
------------------------------------------

        let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 5 }, 'this']);
        console.log('New set', mySet2);

Get the value of the set -
---------------------------

        console.log(mySet.size);

has will return the true and false value - check whether set has 346 or not 
----------------------------------------

        console.log(mySet.has(345)); //true
        console.log(mySet.has(346)); //false

Delete the value -
-------------------

        console.log('Before removal', mySet);
        mySet.delete('that');
        console.log('After removal', mySet);

        console.log('Before removal', mySet.has('this'));
        mySet.delete('this');
        console.log('After removal', mySet.has('this'));

Iterating a set -
--------------------

        for (let item of mySet) {
            console.log('item is :', item);
        }

Itereate by using foreach()-
----------------------------

        mySet.forEach(element => {
            console.log('item is forEach :', mySet);

        });

Coverting set into an Array - We can remove the duplicate 
----------------------------------------------------------

        let myArray = Array.from(mySet);
        console.log('Set to array is', mySet);

-------------------------------------------------------------------------------------------------

What is Map () in JS?
-------------------------
* Map is similar like object.
* We can use any type of key or value. (Function, string, blank object can be use as a key).

Methods & Description -
---------------------

        new Map()	Creates a new Map object
        set()	        Sets the value for a key in a Map
        get()	        Gets the value for a key in a Map
        clear()	        Removes all the elements from a Map
        delete()	Removes a Map element specified by a key
        has()	        Returns true if a key exists in a Map
        forEach()	Invokes a callback for each key/value pair in a Map
        entries()	Returns an iterator object with the [key, value] pairs in a Map
        keys()	        Returns an iterator object with the keys in a Map
        values()	Returns an iterator object of the values in a Map

------------------------------------------------------------------------------------------

create the empty map -
----------------------------
        const myMap = new Map();
        const key1 = 'myStr', key2 = {}, key3 = function () { };

Setting map values -
---------------------
        myMap.set(key1, 'This is a string');
        myMap.set(key2, 'This is blank object');
        myMap.set(key3, 'This is a empty function');
        console.log(myMap);

Getting the values from a Map -
-------------------------------
        let value1 = myMap.get(key1);
        let value2 = myMap.get(key2);
        console.log(value1);
        console.log(value2);

Get the size of the map -
----------------------------
        console.log(myMap.size);

You can loop using for...of to get keys and values-
----------------------------------------------------
        for (let [key, value] of myMap) {
                console.log(key, value);
        }

Get only keys -
----------------
        for (let key of myMap.keys()) {
                console.log('key is ', key);
        }

Get only values -
-------------------
        for (let key of myMap.values()) {
                console.log('value is ', key);
        }

you can loop through a map using for each loop 
the order will be value and key in the parameter 
-----------------------------------------------------

        myMap.forEach((value, key) => {
                console.log('key is-', key);
                console.log('value is-', value);
        });

Coverting map into an Array -
------------------------------

        let myArray = Array.from(myMap);
        console.log('Map to array is', myArray);

Coverting map keys into an Array -
-----------------------------------

        let myKeysArray = Array.from(myMap.keys());
        console.log('Map to keys into array is', myKeysArray);

Coverting map value to an Array -
----------------------------------

        let myValueArray = Array.from(myMap.values());
        console.log('Map to values into array is', myValueArray);
