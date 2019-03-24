var CarSkeleton = require('./chain');

test('Chain pattern returns itself', function () {
  var car = new CarSkeleton('BMW');
  expect(car.addPart('wheels')).toBe(car);
});

test('Chain pattern cans add car in internal array', function () {
  var car = new CarSkeleton('Honda');
  car.addPart('door').addPart('cover').addPart('chairs');
  expect(car.getCount()).toBe(3);
});

test('Chain and Module should close their internal variables', function () {
  var car = new CarSkeleton('Lexus');
  car.addPart('singnal').addPart('window').addPart('chairs');
  expect(car._parts).toBeUndefined();
  expect(car._name).toBeUndefined();
})
