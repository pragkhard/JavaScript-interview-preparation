// console.log("start")
// setTimeout(function(){
//     console.log("setTimeout")
// },1000)
// console.log("end")


// console.log("start")
// setTimeout(function () {
//     console.log("setTimeout")
// }, 1000)

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log("fetch data received"));

// console.log("end")


console.log("start")
setTimeout(function () {
    console.log("setTimeout")
}, 1000)

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log("fetch data received"));

Promise.resolve().then(() => console.log("promise resolve"))

console.log("end")




