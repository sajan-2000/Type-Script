abstract class Shape {
    constructor(protected color: string) { }
    abstract calculateArea(): number;
    abstract displayArea(): void;
}

class Circle extends Shape {
    constructor(protected color: string, protected radius: number) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    displayArea(): void {
        console.log(this.calculateArea());
    }
}

let myCircle = new Circle("red", 10);
myCircle.displayArea();