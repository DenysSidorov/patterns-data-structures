/**
 * 'Builder' pattern allows you have main class, which uses another class with properties.
 * Properties add new opportunities for main class
 */

/** Using 1/5*/

// interface
function Builder() {
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

var factory = new Builder();
var BMWBuilder = new BuilderX5('red');
var car = factory.build(BMWBuilder);


// console.log(car.props);

module.exports = {
  Builder, BuilderX5, BMW_X5
}