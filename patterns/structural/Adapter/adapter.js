/**
 * 'Adapter' pattern allows you create new class with new functionality, but if you want to save
 * old functionality. In this case you can use Adapter pattern instead of old class.
 * Method's semantics and invoke approach will be the same like for old class.
 *
 * */

/** Using 4/5*/

// old working functionality
function OldCar(name) {
  this.name = name;
  this.run = function () {
    return `I'm old car - ${this.name}`;
  }
}

// new functionality, but with another leverages
function NewCar(name) {
  this.name = name;
  // another method for making car to move
  this.fustRun = function () {
    return `I'm new car - ${this.improveCar(this.name)}, brrrr`;
  }
  this.improveCar = function (name) {
    // do some stuff
    return name.toUpperCase();
  }
}

// adapter for new functionality
function AdapterNewCar(name) {
  this.car = new NewCar(name);
  this.run = function () {
    return this.car.fustRun();
  }
}

// user of cars
(function userCar() {
  var car1 = new OldCar('Buick');
  console.log(car1.run());

  // var car2 = new OldCar('Audi');
  var car2 = new AdapterNewCar('Audi');
  console.log(car2.run());
})()


module.exports = {
  OldCar, NewCar, AdapterNewCar
}

