call - 
If you have a method in an object but want to use it with another object.
you can use call or apply to execute it immediately.

apply -
apply works like call but takes arguments as an array.

        const objone = {
            name: 'suneeta',
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