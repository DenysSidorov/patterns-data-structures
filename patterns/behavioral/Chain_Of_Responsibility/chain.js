/**
 * 'Chain of responsibility' pattern allows you to use class, which return itself every time,
 * it can be used in long chain of calls
 */


function CarSkeleton(name) {
  this.name = name;
  this.parts = [];
}

CarSkeleton.prototype.addPart = function (part) {
  this.parts.push(part);
  return this;
}

CarSkeleton.prototype.getCount = function () {
  return this.parts.length;

}

var rover = new CarSkeleton('Rover');

rover.addPart('door').addPart('cover').addPart('chairs').getCount();

console.log(rover.getCount());
