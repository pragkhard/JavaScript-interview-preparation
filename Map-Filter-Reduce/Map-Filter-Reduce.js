// MAP :-
// const nums = [1, 2, 3, 4, 5]

// const muls = nums.map((num, i, arr) => (num * 3 + i))
// console.log(muls)

// const mul = nums.map((num, i, arr) => { return num * 5 })
// console.log(mul)

// =================================================================================================

// const sum = nums.reduce((acc, curr) => (acc + curr))
// const sum2 = nums.reduce((acc, curr, i, arr) => {
//     return acc + curr
// }, 0)
// console.log(sum2)

// ================================================================================================

const students = [
    { name: 'Alice', rollNumber: 1, marks: 85 },
    { name: 'Bob', rollNumber: 2, marks: 78 },
    { name: 'Charlie', rollNumber: 3, marks: 92 },
    { name: 'David', rollNumber: 4, marks: 88 }
];

// const name = students.map((stu)=>{
//     return stu.name
// })

// const name = students.map((stu) => (stu.name.toUpperCase()))
// console.log(name)

// const mark = students.filter((mar) => mar.marks > 90)
// console.log(mark)

// const ma = students.filter((mar) => mar.marks > 80).map((sub)=>(sub.name))
// console.log(ma)

// const sum = students.reduce((acc, curr) => acc + curr.marks, 0)
// console.log(sum)