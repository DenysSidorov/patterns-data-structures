/**
 * 'Bridge' pattern allows you to have abstraction under main class. Both independently can be
 *  can be changed with very easy way.
 */

/** Using 1/5*/


function Car(wheel, engine, petrol) {
  this.wheel = wheel;
  this.engine = engine;
  this.petrol = petrol;

  this.run = function () {
    console.log(this.wheel.checkWheels());
    console.log(this.wheel.start());
    console.log(this.petrol.check());
    console.log(this.engine.startEngine());
    console.log(this.engine.addAllPower());
  }
}

function Wheel(name) {
  this.name = name;
  this.checkWheels = function () {
    return 'Wheels are good!'
  }
  this.start = function () {
    return `Wheel '${this.name}' started!`
  }
}

function Engine(power) {
  this.power = power;
  this.startEngine = function () {
    return 'Engine was started!'
  }
  this.addAllPower = function () {
    return `Engine switched on all power - '${this.power}'`
  }
}

function Petrol(type) {
  this.type = type;
  this.check = function () {
    return `Petrol is full with '${this.type}' type `
  }
}

var petrol = new Petrol(95);
var engine = new Engine('250hp');
var wheel = new Wheel('Michelin');

var car = new Car(wheel, engine, petrol);

car.run();


