class Personss {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    greet(): string {
        return `hii i am ${this.name} and i am ${this.age} years old`
    }
}


class Studentss extends Personss {
    grade: number;
    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies)
        this.grade = grade;
    }
}

let newstudent = new Studentss("sajan", 24, ["dance", "football"], 40);

console.log(newstudent.greet());
