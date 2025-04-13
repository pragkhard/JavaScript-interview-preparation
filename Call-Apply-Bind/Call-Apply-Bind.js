// let objs = {
//     name: "Pragati",
//     age: 33,
//     printfun: function (state, country) {
//         console.log(this.name + " " + state + " " + country);
//         // console.log(this)
//     }
// }
// let objtwo = {
//     name: "Shubhi",
//     age: 36

// }

// objs.printfun.call(objtwo, "Pune", "India");
// objs.printfun.apply(objtwo, ["Pune", "India"]);
// let fun = objs.printfun.bind(objtwo, "Pune", "India");
// console.log(fun());


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