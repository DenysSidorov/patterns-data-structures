const Iterator = require('./index');

var iterator = null;
var items = ["one", 2, "circle", true, "Applepie"];

beforeEach(function () {
  jest.resetModules(); // disable cache of every required module
  const Iterator = require('./index');
  iterator = new Iterator(items);
})

test("Iterator's first function should return first element", function () {
  iterator.next();
  iterator.next();
  expect(iterator.first()).toBe(items[0]);
});

test("Iterator's reset function should set zero index", function () {
  iterator.next();
  iterator.next();
  iterator.reset();
  expect(iterator.index).toBe(0);
});

test("Iterator's hasNext function should return false after last element", function () {
  iterator.next();
  iterator.next();
  iterator.next();
  iterator.next();
  expect(iterator.hasNext()).toBe(true);
  iterator.next();
  iterator.next();
  expect(iterator.hasNext()).toBe(false);
});

test("Iterator's next function should work correctly", function () {
  iterator.next();
  iterator.next();
  expect(iterator.index).toBe(2);
});
