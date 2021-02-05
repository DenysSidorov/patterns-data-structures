var Queue = require('./queue');

test('Queue\'s enqueue method should add values', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.enqueue(15);
  expect(queue.items[queue.items.length - 1]).toBe(15);
  expect(queue.isEmpty()).toBe(false);
});

test('Queue\'s isEmpty method should return true if no data', function () {
  var queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
});
