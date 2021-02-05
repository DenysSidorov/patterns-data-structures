/**
 * 'Prototype' pattern allows you have class for cloning from prototype-class, and get new instances
 */

/** Using 3/5*/

function CarPrototype(car) {
  this.car = car;
  this.clone = function () {
    var newCar = new Car(); // Empty!
    newCar.name = this.car.name;
    newCar.speed = this.car.speed;
    return newCar;
  }
}

function Car(name, speed) {
  this.name = name;
  this.speed = speed;
  this.run = function () {
    return `I'm ${this.name} car, and i have ${this.speed} speed!`
  }
}

var car = new Car('Honda', 250);
var carPrototype = new CarPrototype(car);

var honda1 = carPrototype.clone();
var honda2 = carPrototype.clone();

// console.log(honda1 === honda2);

module.exports = {Car, CarPrototype}
