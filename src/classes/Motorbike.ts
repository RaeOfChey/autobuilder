// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Create a constructor that accepts the properties of the Motorbike class
  constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[] // Accept wheels as a parameter
  ) {
      // Call the constructor of the parent class, Vehicle
      super(); // Call the parent constructor

      // Initialize the properties of the Motorbike class
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;

      // Check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
      if (wheels.length !== 2) {
          // Create default Wheel objects if the wheels array is not valid
          this.wheels = [
              new Wheel(16, "Default Front Wheel Brand"), // Example diameter and brand
              new Wheel(16, "Default Rear Wheel Brand")
          ];
      } else {
          this.wheels = wheels; // Assign the provided wheels if valid
      }
  }

  // Implement the wheelie method
  wheelie() {
    // Log the message "Motorbike [make] [model] is doing a wheelie!"
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails() {
    // Call the printDetails method of the parent class
    super.printDetails();

    // Log the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;