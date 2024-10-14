// Import necessary classes
import Vehicle from './src/classes/Vehicle.js';
import Motorbike from './src/classes/Motorbike.js';
import Car from './src/classes/Car.js';
import Wheel from './src/classes/Wheel.js';
import AbleToTow from './src/interfaces/AbleToTow.js';
import Truck from './src/classes/Truck.js';

// Create instances of Wheel
const wheel1 = new Wheel();
const wheel2 = new Wheel();
const wheel3 = new Wheel();
const wheel4 = new Wheel();

// Create instances of Motorbike and Car for testing
const myMotorbike = new Motorbike('MOTO123', 'red', 'Yamaha', 'YZF-R3', 2022, 169, 188, [wheel1, wheel2]);
const myCar = new Car('CAR123', 'blue', 'Toyota', 'Camry', 2021, 1500, 120, [wheel1, wheel2, wheel3, wheel4]);

// Create an instance of Truck
const myTruck = new Truck('TRUCK123', 'black', 'Ford', 'F-150', 2023, 3000, 130, 5000, [wheel1, wheel2, wheel3, wheel4]);

// Call methods to test functionality
myTruck.printDetails(); // Test printDetails
myTruck.tow(myCar); // Test towing a car
myTruck.tow(myMotorbike); // Test towing a motorbike
