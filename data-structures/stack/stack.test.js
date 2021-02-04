var Stack = require('./stack');

test('Stack\'s push method should add values', function () {
  var stack = new Stack();
  stack.push(34);
  stack.push(23);
  expect(stack.items.length).toBe(2);
  expect(stack.items[0]).toBe(34);
  expect(stack.items[1]).toBe(23);
});

test('Stack\'s pop method should remove values', function () {
  var stack = new Stack();
  stack.push(34);
  stack.push(23);
  stack.push(8);
  expect(stack.pop()).toBe(8);
});

test('Stack\'s peek method should return last value', function () {
  var stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(34);
  expect(stack.peek()).toBe(34);
});

test('Stack\'s peek method should return last value', function () {
  var stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  stack.push(34);
  expect(stack.isEmpty()).toBe(false);
});

test('Stack\'s printStack method should show values in stack', function () {
  var stack = new Stack();
  stack.push(22);
  stack.push(33);
  stack.push(44);
  expect(stack.printStack()).toBe('22 33 44');
});

