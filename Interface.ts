
// let greets: {
//     name: string;
//     age: number;
// } = {
//     name: "Sajan",
//     age:24
// }                       instead of doing like this we can use interface

interface Greets {
    name: string;
    age: number;
}
let greets: Greets = {
    name: "Sajan",
    age: 24
} 