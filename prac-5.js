class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    displayDetails(){
        console.log(`Vehicle Details:${this.year} ${this.make} ${this.model}`);
    }

    calculateMileage(distance,fuel){
        const mileage=distance/fuel;
        console.log(`Mileage:${mileage} mile per liter`);
    }
}

class Car extends Vehicle{
   constructor(make,model,year,doors){
    super(make,model,year);
    this.doors=doors;
   }

   displayDetails(){
   super.displayDetails();
   console.log("Doors:",this.doors);
}

}

class MotorCycle extends Vehicle{
    constructor(make,model,year,engine){
        super(make,model,year);
        this.engine=engine;
       }

       displayDetails(){
        super.displayDetails();
        console.log("Engines:",this.engine);
     }
}

const bike=new MotorCycle("kawasaki",2023,400,2);
bike.displayDetails();
bike.calculateMileage(200,20);

const car=new Car("alto",2022,3,4);
car.displayDetails();
car.calculateMileage(350,14);