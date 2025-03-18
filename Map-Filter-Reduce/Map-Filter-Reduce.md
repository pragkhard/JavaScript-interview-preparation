Map-Filter-Reduce - Array methods that used to iterate over an array

Map- map is used to creating the new array from the existing one by applying a function to each one of the element 

const mul = nums.map((num, i, arr) => {return num * 5})
console.log(mul)

num - current element
i - index
arr - actual element

Reducer - use at the place where you have to take all the elements of an array and comeout in the single value.

const sum2 = nums.reduce((acc, curr, i, arr) => {
    return acc + curr
}, 0)

It take callback function and initial value
acc - accumulator (result of previous computation)
