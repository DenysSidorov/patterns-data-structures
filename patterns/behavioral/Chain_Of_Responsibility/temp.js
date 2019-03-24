var CarSkeleton = require('./chain');


var car = new CarSkeleton();
var car2 = new CarSkeleton();

car.addPart('door').addPart('cover').addPart('chairs').getCount();
car2.addPart('back-lights');


console.log(car.getCount());
console.log(car2.getCount());