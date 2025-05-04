call - 
If you have a method in an object but want to use it with another object.
you can use call or apply to execute it immediately.

apply -
apply works like call but takes arguments as an array.

        const objone = {
            name: 'Pragati',
            age: 48,
            printf: function (state, country) {
                console.log(this.name + " " + state + " " + country)
            }
        }
        const objtwo = {
            name: 'khard',
            age: 50,

        }
        objone.printf.call(objtwo, "niwari", "india")
        objone.printf.apply(objtwo, ["niwari", "india"])
        let fun = objone.printf.bind(objtwo, "niwari", "india")
        console.log(fun())


Difference between Call, Appy and Bind in JS?   
-----------------------------------------------
Call
------		
* call() method, you can write a method that can be used on different objects.
* The call() method takes arguments separately.	

Appy
-----
* The apply() method, you can write a method that can be used on different objects.
  The apply() method is similar to the call() method.	

* The apply() method takes arguments as an array.	

Bind
-----
* Bind () same as like the call () only diff is it will not directly call it will make the copy and whenever is needed it will call.

	
