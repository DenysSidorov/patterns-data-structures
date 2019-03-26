var {OldCar, NewCar, AdapterNewCar} = require('./adapter');

test('Adapter, test old functionality', function () {
  var name = 'Buick';
  var oldCar = new OldCar(name);
  expect(oldCar.name).toBe(name);
})

test('Adapter, test new functionality', function () {
  var name = 'BMW';
  var newCar = new NewCar(name);
  const spy = jest.spyOn(newCar, 'improveCar');
  newCar.fustRun();
  expect(newCar.name).toBe(name);
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith(name);
})

test('Adapter, test adapter for new functionality', function () {
  var carInAdapter = new AdapterNewCar('Audi');
  const spy = jest.spyOn(carInAdapter, 'run');
  carInAdapter.run();
  expect(spy).toHaveBeenCalled();
})