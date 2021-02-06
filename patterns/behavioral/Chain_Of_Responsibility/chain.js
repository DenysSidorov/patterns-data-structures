/**
 * 'Chain of responsibility' pattern allows you to use class, which return itself every time,
 * it can be used in long chain of calls
 */

/** Using 3/5*/

function CarSkeleton(name) {
  let _name = name;
  let _parts = [];

  addPart = function (part) {
    _parts.push(part);
    return this;
  };

  getCount = function () {
    return _parts.length;
  };

  return {
    addPart,
    getCount
  };
}

module.exports = CarSkeleton;


var rover = new CarSkeleton('Rover');

rover.addPart('door').addPart('cover').addPart('chairs').getCount();

// console.log(rover.getCount());
