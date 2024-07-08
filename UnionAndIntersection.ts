//!Example
//we will create a function that can accept different types arguments and  perform diff actions,it will double the value if the argument is number or will convert to uppercase if the input is string>>

const input = (input: string | number): string | number => {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 2;
    } else {
        throw new Error("Invalid");
    }
}

console.log(input(55));
console.log(input("sajan"));

//Example-2,,,,how to use union with objects 
// type Personal = {
//     name: string;
//     age: number;
// }

// type Employee = {
//     empid: number;
//     dept: string;
// }

// type EmployeeDetails = Personal | Employee;

// const user: EmployeeDetails = {
//     name: "sajan",
//     age: 25
// }

//!Intersection Example.....
type Personal = {
    name: string;
    age: number;
}

type Employee = {
    empid: number;
    dept: string;
}

type EmployeeDetails = Personal & Employee;

const user: EmployeeDetails = {
    name: "sajan",
    age: 25,
    empid: 8520,
    dept: "Manager"
}