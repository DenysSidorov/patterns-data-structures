var LinkedList = require('./LinkedList');

describe('append', () => {
  test('append the first node', function () {
    var list = new LinkedList();
    list.append(35);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(35);
  });

  test('append several nodes', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(55);
  });
});

describe('prepend', () => {
  test('prepend the first node', function () {
    var list = new LinkedList();
    list.prepend(90);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(90);
    expect(list.tail.value).toBe(90);
  });

  test('prepend several nodes', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.prepend(65);
    expect(list.length).toBe(4);
    expect(list.head.value).toBe(65);
    expect(list.tail.value).toBe(55);
  });
});

describe('isEmpty', () => {
  test('is empty for length equal 0', function () {
    var list = new LinkedList();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('is empty for length equal 1', function () {
    var list = new LinkedList();
    list.append(35);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(35);
  });

  test('is empty for length equal 2', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(45);
  });

});

describe('remove',() => {
  test('remove first value', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(35);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(45);
    expect(list.tail.value).toBe(65);
  });

  test('remove from center one value', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(55);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(65);
  });

  test('remove from center two values (should be removed all values)', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(55);
    list.append(65);
    list.remove(55);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(65);
  });

  test('remove same two values from first and second positions (in list.length > 2)', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(35);
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(35);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(45);
    expect(list.tail.value).toBe(65);
  });

  test('remove same two values from first and second positions (in list.length equal 2)', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(35);
    list.remove(35);
    list.print();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('remove second value', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(45);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(65);
  });

  test('remove first and second values', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(35);
    list.remove(45);
    list.print();
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(55);
    expect(list.tail.value).toBe(65);
  });

  test('remove last value', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(65);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(55);
  });

  test('remove penultimate value', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(55);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(65);
  });

  test('remove penultimate and last values', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(55);
    list.remove(65);
    list.print();
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(45);
  });

  test('remove last and penultimate values', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.remove(65);
    list.remove(55);
    list.print();
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(45);
  });

  test('remove first value from one size list', function () {
    var list = new LinkedList();
    list.append(35);
    list.remove(35);
    list.print();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('remove first value from two size list', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.remove(35);
    list.print();
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(45);
    expect(list.tail.value).toBe(45);
  });

  test('remove last value from two size list', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.remove(45);
    list.print();
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(35);
  });

  test('remove two values from two size list', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.remove(35);
    list.remove(45);
    list.print();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('remove two same values from the end (in list.length > 2)', function () {
    var list = new LinkedList();
    list.append(35);
    list.append(45);
    list.append(55);
    list.append(65);
    list.append(65);
    list.append(65);
    list.remove(65);
    list.print();
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(55);
  });

});



