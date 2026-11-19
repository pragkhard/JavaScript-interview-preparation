TypeScript Magic Type Inference | Angular, Typescript and react js Interview Ready #typescript
==============================================================================================


1. What is Type Inference?
--------------------------

Type Inference means TypeScript automatically detects the data type based on the value assigned to a variable. You don't always need to explicitly define the data type.

Example:
let data = "Apple";
console.log(typeof data); // string

let age = 50;
console.log(typeof age); // number


TypeScript automatically understands:
- "Apple" is a string.
- 50 is a number.


2. Type Inference in Functions
-------------------------------

TypeScript can also automatically identify a function's return type.
function sum(a: number, b: number) {
    return a + b;
}

Here:
- Both parameters are numbers.
- The return type is automatically inferred as number.
- You don't need to explicitly write : number after the function declaration.

Another example:
function getName() {
    return "Pragati";
}

TypeScript automatically infers the return type as string.


3. When Do We Need to Define Types Explicitly?
------------------------------------------------

When a variable needs to accept multiple data types, you should explicitly define its type using a Union Type.
let data: number | string = 40;

data = "Anil"; // Allowed
data = 50;     // Allowed


Here:
- number | string means the variable can accept either a number or a string.
- TypeScript cannot automatically predict all future values.
- Therefore, we explicitly define the allowed types.


4. Important Interview Takeaways
-----------------------------------
Concept	                    -       Explanation
Type Inference	            -       TypeScript automatically detects data types
Variable Inference	        -       Detects type from assigned value
Return Type Inference	    -       Detects function return type
Union Type	                -       Allows multiple data types
Explicit Typing	            -       Manually defines the data type


Interview question: What is Type Inference in TypeScript?
 ------------------------------------------------------------

Answer: Type Inference is a feature in TypeScript that automatically determines the data type of a variable, function return value, or expression based on the assigned value or context. It reduces the need for explicitly specifying types.

Remember: Use Type Inference when TypeScript can clearly identify the type. Use explicit typing when you need to define multiple possible types or establish a specific contract.