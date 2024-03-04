var Queue = require('./queue-object');

test('Queue\'s enqueue method should add values', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.enqueue(15);
  expect(queue.size()).toBe(3);
});

test('Queue\'s dequeue method should remove values', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.enqueue(15);
  queue.dequeue();
  expect(queue.size()).toBe(2);
});

test('Queue\'s dequeue method should remove all items', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  expect(queue.dequeue()).toBe(undefined);
  expect(queue.size()).toBe(0);
});

test('Queue\'s front method should return head without removing', function () {
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(11);
  queue.enqueue(13);
  queue.enqueue(15);
  queue.dequeue();
  expect(queue.front()).toBe(11);
  expect(queue.size()).toBe(3);
});

test('Queue\'s isEmpty method should return true if no data', function () {
  var queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
});
