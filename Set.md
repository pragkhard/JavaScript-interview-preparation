What is set in ES6?
-----------------------
* Set is the collection of well-defined objects.
* Set store the unique values. (It preserved the unique values)
* Means it will not repeat/ count the values.
--------------------------------------------------------------------   
Method	Description -
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
