var Queue = require('./queue-array');

test('Queue\'s enqueue method should add values', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.enqueue(15);
  expect(queue.items[queue.items.length - 1]).toBe(15);
  expect(queue.isEmpty()).toBe(false);
});

test('Queue\'s dequeue method should remove values', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.enqueue(15);
  queue.dequeue();
  expect(queue.items[queue.items.length - 1]).toBe(15);
  expect(queue.items[0]).toBe(11);
  expect(queue.isEmpty()).toBe(false);
});

test('Queue\'s dequeue method should remove all items', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  expect(queue.items[queue.items.length - 1]).toBe(undefined);
  expect(queue.items[0]).toBe(undefined);
  expect(queue.isEmpty()).toBe(true);
});

test('Queue\'s isEmpty method should return true if no data', function () {
  var queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
});
