class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;

    }

    information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
        
}
class Cars extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    information(){
        super.information();
        console.log(`Doors: ${this.doors}.`);
    }
}

let myCar = new Cars('VW', 'Passat', 2012, 5);
myCar.information();

// let myVehicle = new Vehicle('cm', 'Golf', 2010);
// myVehicle.information();