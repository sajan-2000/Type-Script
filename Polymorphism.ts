abstract class Vehicle {
    abstract startEngine(): void;
}

class Car extends Vehicle {
    startEngine(): void {
        console.log('Car engine started');
    }
}

class Motorcycle extends Vehicle {
    startEngine(): void {
        console.log('Motorcycle engine started');
    }
}
