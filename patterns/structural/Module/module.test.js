
/*
* addCar
* getPrice
* getCountOfCars
* _getCarsArray xxx
* _cars = []
* */

var m = null;

beforeEach(function () {
  jest.resetModules(); // disable cache of every required module
  const Module = require('./module');
  m = new Module();
})

test('Module should open method for getting price', function () {
  m.addCar({name: 'Fiat', price: 15000});
  m.addCar({name: 'Opel', price: 23000});
  expect(m.getPrice()).toBe(38000);
})

test('Module should open method for getting count of cars', function () {
  m.addCar({name: 'Fiat', price: 15000});
  m.addCar({name: 'BMW', price: 55000});
  expect(m.getCountOfCars()).toBe(2);
})

test('Module should open method for setting cars', function () {
  m.addCar({name: 'Toyota', price: 30000});
  expect(m.getCountOfCars()).toBe(1);
})

test('Module must close internal methods', function () {
  m.addCar({name: 'Fiat', price: 15000});
  expect(m._getCarsArray).toBeUndefined();
})

test('Module must close internal variables', function () {
  m.addCar({name: 'Mercedes', price: 48000});
  expect(m._cars).toBeUndefined();
})