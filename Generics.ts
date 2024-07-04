
// function logAndReturn(value:string | number |boolean):string | number | boolean {
//     console.log(value);
//     return value;
// }

// let res = logAndReturn("10");
// let res2 = logAndReturn("sajan"); //*Here in the whole code instead of writing each amd every type in union type we can use generics here.

//!GENERICS

function logAndReturn<T>(value: T): T {
    console.log(value);
    return value;
}

let res = logAndReturn<number>(10);
let res2 = logAndReturn<string>("sajan");
let res3 = logAndReturn<boolean>(true)  //This is how we can use generics easily
//when we are calling the function then only it will decide what will be the type of the value

//!Multiole types generic use

function add<T, U>(a: T, b: U) {
    console.log(typeof a);
    console.log(typeof b);

}
add(10, "sajan");
// add("sajan", "kumar");