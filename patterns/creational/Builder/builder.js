/**
 * Factory
 * Builder car
 * Car
 * */

// interface
function Factory() {

  this.build = function (builder) {
    builder.step1();
    builder.step2();
    return builder.getCar();
  }
}

// interface
function BuilderX5(color) {
  this.car = null;
  this.step1 = function () {
    this.car = new BMW_X5();
  }
  this.step2 = function () {
    this.car.paint(color);
  }
  this.getCar = function () {
    return this.car;
  }
}

// class implementation
function BMW_X5() {
  this.props = {color: 'white', /** Another properties*/};
  this.paint = function (color) {
    this.props.color =  color;
  }
}

var factory = new Factory();
var BMWBuilder = new BuilderX5('red');
var car = factory.build(BMWBuilder);


console.log(car.props);




// function Shop() {
//   this.construct = function(builder) {
//     builder.step1();
//     builder.step2();
//     return builder.get();
//   }
// }
//
// function CarBuilder() {
//   this.car = null;
//
//   this.step1 = function() {
//     this.car = new Car();
//   };
//
//   this.step2 = function() {
//     this.car.addParts();
//   };
//
//   this.get = function() {
//     return this.car;Ω®
//   };
// }
//
// function TruckBuilder() {
//   this.truck = null;
//
//   this.step1 = function() {
//     this.truck = new Truck();
//   };
//
//   this.step2 = function() {
//     this.truck.addParts();
//   };
//
//   this.get = function() {
//     return this.truck;
//   };
// }
//
// function Car() {
//   this.doors = 0;
//
//   this.addParts = function() {
//     this.doors = 4;
//   };
//
//   this.say = function() {
//     log.add("I am a " + this.doors + "-door car");
//   };
// }
//
// function Truck() {
//   this.doors = 0;
//
//   this.addParts = function() {
//     this.doors = 2;
//   };
//
//   this.say = function() {
//     log.add("I am a " + this.doors + "-door truck");
//   };
// }
//
// // log helper
// var log = (function () {
//   var log = "";
//   return {
//     add: function (msg) { log += msg + "\n"; },
//     show: function () { console.log(log); log = ""; }
//   }
// })();
//
// function run() {
//   var shop = new Shop();
//   var carBuilder = new CarBuilder();
//   var truckBuilder = new TruckBuilder();
//   var car = shop.construct(carBuilder);
//   var truck = shop.construct(truckBuilder);
//
//   car.say();
//   truck.say();
//
//   log.show();
// }

