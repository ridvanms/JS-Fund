class Vehicle {
    constructor(a, b, parts, fuel) {
        this.type = a;
        this.model = b;
        this.parts = parts;
        this.parts.quality = +this.parts[Object.keys(this.parts)[0]] * +this.parts[Object.keys(this.parts)[1]]
        this.fuel = fuel;
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }

}
// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);


let parts = { engine: 9, power: 500 };
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);

// The constructor should receive the
//  type, the model, the parts as an object, and the fuel