'use strict';

class GasStation {
  gasAmount: number = 150000;

  constructor(gasAmountIN: number = 150000) {
    this.gasAmount = gasAmountIN;
  };

  refill(car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  };
};

class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmountIN: number = 0, capacityIN: number = 100) {
    this.capacity = capacityIN,
      this.gasAmount = gasAmountIN;
  };
};

let myNewCar = new Car();
let gasStation = new GasStation();

gasStation.refill(myNewCar)

console.log(myNewCar);
console.log(gasStation);
