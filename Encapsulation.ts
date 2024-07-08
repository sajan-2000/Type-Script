class Persons1 {
    name: string;
    age: number;
    hobbies: string[];
    private phoneNo: number;

    constructor(name: string, age: number, hobbies: string[], phoneNo: number) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.phoneNo = phoneNo;
    }

    introduce() {
        console.log(`Hi my name is ${this.name} ,i am ${this.age} years old`);
    }
}

let newPerson1 = new Persons1("sajan", 25, ["dance"], 8327705331);
newPerson.introduce();