//*How to initialize an object

// let person: {
//     name: string;
//     age: number;
//     address: { city: string; state: string }
// } = {
//     name: "Sajan",
//     age: 24,
//     address: {
//         city: "bbsr",
//         state: "Odisha"
//     }
// }

// console.log(person.address.state);

//so if i want to create more users or persons then again i have to create more persons object with same property and type so to overcome that we will use alias
//!Definition:-A type alias is a way to give a name to a specific type or combination of types.It allows you to create a custom name for a type,making it easier to reuse and refer to the same type in different parts of your code
//*It provides better readability ,organization, and abstraction of complex types

//Example:-
// let person1: {
//     name: string;
//     age: number;
//     address: { city: string; state: string }
// } = {
//     name: "Sajan",
//     age: 24,
//     address: {
//         city: "bbsr",
//         state: "Odisha"
//     }
// }

// let person2: {
//     name: string;
//     age: number;
//     address: { city: string; state: string }
// } = {
//     name: "Sajan",
//     age: 24,
//     address: {
//         city: "bbsr",
//         state: "Odisha"
//     }
// }

// let person3: {
//     name: string;
//     age: number;
//     address: { city: string; state: string }   //Here for each person we are repeating same type annotations
// } = {
//     name: "Sajan",
//     age: 24,
//     address: {
//         city: "bbsr",
//         state: "Odisha"
//     }
// }

type Person = {
    name: string;
    age: number;
    address: { city: string; state: string }
}

let person2: Person = {
    name: "Sajan",
    age: 24,
    address: {                   //This way you can reduce repeatation and use type alias
        city: "bbsr",
        state: "Odisha"
    }
}

type Product = {
    name: string;
    price: number;
    quantity: number;
}

let product: Product = {
    name: "Book",
    price: 1000,
    quantity: 5
}

const calculateTotal = (product:Product) => {
    return product.price * product.quantity;
}
console.log(calculateTotal(product));