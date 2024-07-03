type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string; //This is call signature
}

let student1: Student = {
    name: "Sajan",
    age: 25,
    greet: (country): string => `my name is ${student1.name} and my age is ${student1.age} im from ${country}`
    
}

console.log(student1.greet("India"));