var {Car, CarPrototype} = require('./prototype');


test('Prototype should return normal values of new object', function () {

  var car = new Car('Audi RS', 320);
  var carPrototype = new CarPrototype(car);

  var audi1 = carPrototype.clone();
  var audi2 = carPrototype.clone();

  expect(audi1.speed).toBe(320);
  expect(audi2.speed).toBe(320);
  expect(audi1).not.toBe(audi2);
})