class Persons {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce() {
        console.log(`Hi my name is ${this.name} ,i am ${this.age} years old`);
    }
}

let newPerson = new Persons("sajan", 25, ["dance"]);
newPerson.introduce();