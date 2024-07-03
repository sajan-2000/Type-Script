//!Any:-It turns off all the type checking for the variables or expressions it is applied to.

// let myNum2:number = 5;
// myNum2="sajan"   //Here i will get error because i have specified the variable must be a number

let myNum2: any = 5;
myNum2 = "sajan";  //NoError because i am using any keyword here
myNum2 = true;      //NoError because i am using any keyword here

//!usecases:
//* Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.

//* Migration from JavaScript: When migrating an existing JavaScript codebase to TypeScript, using the any type can be a convenient way to quickly annotate variables and functions without immediately specifying their precise


//!"Unknown Type" type:-It is a ssafer alternative to any because it still enforces type checking and type safety.
let num3: unknown;//(it means as of now we dont know which type will come but based on that we can perform type   safety)
num3 = 5;
num3 = true;
num3 = "sajan";

if (typeof num3 === "number") {
    console.log("It is a number");
} else {
    console.log(typeof num3);
}
