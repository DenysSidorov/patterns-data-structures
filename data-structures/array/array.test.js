var Array = require('./array');

test('Array\'s push method should add values', function () {
  var array = new Array();
  array.push(34);
  array.push(23);
  expect(array.length).toBe(2);
  expect(array.data[0]).toBe(34);
});

test('Array\'s push method should return correct length', function () {
  var array = new Array();
  array.push(40);
  expect(array.push(10)).toBe(2);
});

test('Array\'s pop method should remove last element', function () {
  var array = new Array();
  array.push(1);
  array.push(2);
  array.push(3);
  array.pop();
  expect(array.length).toBe(2);
});

test('Array\'s pop method should return removed element', function () {
  var array = new Array();
  array.push(10);
  array.push(20);
  array.push(30);
  expect(array.pop()).toBe(30);
});

// test('Chain pattern cans add car in internal array', function () {
//   var car = new CarSkeleton('Honda');
//   car.addPart('door').addPart('cover').addPart('chairs');
//   expect(car.getCount()).toBe(3);
// });
//
// test('Chain and Module should close their internal variables', function () {
//   var car = new CarSkeleton('Lexus');
//   car.addPart('singnal').addPart('window').addPart('chairs');
//   expect(car._parts).toBeUndefined();
//   expect(car._name).toBeUndefined();
// })
