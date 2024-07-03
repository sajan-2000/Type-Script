//How to initialize an array

//* Using Square brackets
let numArr: number[] = [1, 2, 3, 4, 5];

//* Using Array Constructor
let numArr2: number[] = new Array(1, 2, 3, 4, 5);

//* Using Array.of()
let strArr: string[] = Array.of("sajan", "salman", "don");

//how to use readonly
//The readonly keyword can prevent arrays from being changed

let nameStr: readonly string[] = ["sajan"];

// nameStr.push("hello");   // it will throw error

//!Tuple
//A tuple is a typed array with a pre-defined length and types for each index.

let tupleArr: [string, boolean, number] = ["sajan", true, 5];