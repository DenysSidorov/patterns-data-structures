const {LinkedList, LinkedListNode} = require('./index');

describe('prepend', () => {
  test('prepend the first node', function () {
    const list = new LinkedList();
    list.prepend(35);
    // expect(list.length).toBe(1);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(35);
  });

  test('prepend several nodes', function () {
    let list = new LinkedList();
    list.prepend(35).prepend(45).prepend(65).prepend(55);
    expect(list.length).toBe(4);
    expect(list.head.value).toBe(55);
    expect(list.tail.value).toBe(35);
    // expect(list.tail.next).toBe(null);
  });

  test('append the first node', function () {
    const list = new LinkedList();
    list.append(35);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(35);
    expect(list.length).toBe(1);
  });

  test('append several nodes', function () {
    let list = new LinkedList();
    list.append(35).append(45).append(100);
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(35);
    expect(list.tail.value).toBe(100);
    expect(list.tail.next).toBe(null);
  });

  test('get size of the linked list', function () {
    let list = new LinkedList();
    list.append(335).append(425).append(100);
    expect(list.length).toBe(3);
    expect(list.getSize()).toBe(3);
  });

  test('remove tail from the linked list with length equal to 1', function () {
    let list = new LinkedList();
    list.append(335);
    list.deleteTail();
    expect(list.length).toBe(0);
  });

  test('remove tail from the linked list with two elements', function () {
    let list = new LinkedList();
    list.append(335).append(45);
    list.deleteTail();
    expect(list.length).toBe(1);
    expect(list.tail.value).toBe(335);
    expect(list.head.value).toBe(335);
  });

  test('remove tail from the linked list with 5 elements', function () {
    let list = new LinkedList();
    list.append(335).append(45).append(452).append(777).append(999);
    list.deleteTail();
    expect(list.length).toBe(4);
    expect(list.tail.value).toBe(777);
    expect(list.head.value).toBe(335);
  });

  test('remove tail from the empty linked list', function () {
    let list = new LinkedList();
    list.deleteTail();
    expect(list.length).toBe(0);
    expect(list.tail).toBe(null);
    expect(list.head).toBe(null);
  });

  test('remove head from the linked list with length equal to 1', function () {
    let list = new LinkedList();
    list.append(56);
    list.deleteHead();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('remove head from the linked list with two elements', function () {
    let list = new LinkedList();
    list.append(3345).append(4445);
    list.deleteHead();
    expect(list.length).toBe(1);
    expect(list.tail.value).toBe(4445);
    expect(list.head.value).toBe(4445);
  });

  test('remove head from the linked list with 5 elements', function () {
    let list = new LinkedList();
    list.append(1335).append(145).append(1452).append(1777).append(1999);
    list.deleteHead();
    expect(list.length).toBe(4);
    expect(list.tail.value).toBe(1999);
    expect(list.head.value).toBe(145);
  });

  test('remove head from the empty linked list', function () {
    let list = new LinkedList();
    list.deleteHead();
    expect(list.length).toBe(0);
    expect(list.tail).toBe(null);
    expect(list.head).toBe(null);
  });

  test('find first element in the empty linked list', function () {
    let list = new LinkedList();
    const result = list.findFirst(45);
    expect(list.length).toBe(0);
    expect(list.tail).toBe(null);
    expect(list.head).toBe(null);
    expect(result).toBe(null);
  });

  test('find first element in the linked list with length = 1', function () {
    let list = new LinkedList();
    list.append(345);
    const result = list.findFirst(345);
    expect(list.length).toBe(1);
    expect(result.value).toBe(345);
  });

  test('find first element in the linked list with 5 elements', function () {
    let list = new LinkedList();
    list.append(5).append(15).append(17).append(17).append(99);
    const result = list.findFirst(17);
    expect(list.length).toBe(5);
    expect(result.value).toBe(17);
  });

  test('find not existed element in the linked list with 5 elements', function () {
    let list = new LinkedList();
    list.append(15).append(115).append(117).append(117).append(199);
    const result = list.findFirst(999999);
    expect(list.length).toBe(5);
    expect(result).toBe(null);
  });

  test('clear linked list with 3 elements', function () {
    let list = new LinkedList();
    list.append(15).append(115).append(117);
    const result = list.clear();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('convert empty linked list to array', function () {
    const list = new LinkedList();
    const array = list.toArray();
    expect(array.length).toBe(0);
  });

  test('convert linked list with 1 value to array', function () {
    const list = new LinkedList();
    list.append(4455);
    const array = list.toArray();
    expect(array.length).toBe(1);
    expect(array[0]).toBe(4455);
  });

  test('convert linked list with 3 values to array', function () {
    const list = new LinkedList();
    list.append(4455).append(453).append(145);
    const array = list.toArray();
    expect(array.length).toBe(3);
    expect(array[0]).toBe(4455);
  });

  test('add values from the array to the linked list', function () {
    const list = new LinkedList();
    list.append(445).append(453).append(145);
    list.fromArray([234, 2354]);
    expect(list.length).toBe(5);
    expect(list.getSize()).toBe(5);
  });

  test('get node by the index, started from zero', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333).append(444);
    expect(list.length).toBe(4);
    expect(list.getAt(2).value).toBe(333);
  });

  test('get node by the not existed index', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333).append(444);
    expect(list.length).toBe(4);
    expect(list.getAt(10)).toBe(null);
  });

  test('get first node by index from LinkedList with length = 1', function () {
    const list = new LinkedList();
    list.append(111);
    expect(list.length).toBe(1);
    expect(list.getAt(0).value).toBe(111);
  });

  test('remove element by the index from empty LinkedList', function () {
    const list = new LinkedList();
    expect(list.length).toBe(0);
    expect(list.removeAt(0)).toBe(null);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('remove first element by the index 0 from LinkedList with length=1', function () {
    const list = new LinkedList();
    list.append(111);
    expect(list.length).toBe(1);
    expect(list.removeAt(0).value).toBe(111);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('remove first element from LinkedList with length=2', function () {
    const list = new LinkedList();
    list.append(111).append(222);
    expect(list.length).toBe(2);
    expect(list.removeAt(0).value).toBe(111);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(222);
    expect(list.tail.value).toBe(222);
  });

  test('remove first element from LinkedList with length=3', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333);
    expect(list.length).toBe(3);
    expect(list.removeAt(0).value).toBe(111);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(222);
    expect(list.tail.value).toBe(333);
  });

  test('remove second element from LinkedList with length=3', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333);
    expect(list.length).toBe(3);
    expect(list.removeAt(1).value).toBe(222);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(111);
    expect(list.tail.value).toBe(333);
  });

  test('remove third element from LinkedList with length=3', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333);
    expect(list.length).toBe(3);
    expect(list.removeAt(2).value).toBe(333);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(111);
    expect(list.tail.value).toBe(222);
  });

  test('insert element to empty LinkedList', function () {
    const list = new LinkedList();
    expect(list.length).toBe(0);
    list.insertAt(2, 222)
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(222);
    expect(list.tail.value).toBe(222);
  });

  test('insert element to start of LinkedList with length=1', function () {
    const list = new LinkedList();
    list.append(444);
    expect(list.length).toBe(1);
    list.insertAt(0, 222)
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(222);
    expect(list.tail.value).toBe(444);
  });

  test('insert element to start of LinkedList with length=2', function () {
    const list = new LinkedList();
    list.append(444).append(555);
    expect(list.length).toBe(2);
    list.insertAt(0, 222)
    expect(list.length).toBe(3);
    expect(list.head.value).toBe(222);
    expect(list.tail.value).toBe(555);
  });

  test('insert element to middle of LinkedList with length=3', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333);
    expect(list.length).toBe(3);
    list.insertAt(1, 555)
    expect(list.length).toBe(4);
    expect(list.getAt(1).value).toBe(555)
    expect(list.head.value).toBe(111);
    expect(list.tail.value).toBe(333);
  });

  test('insert element to the not existed index of LinkedList', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333);
    expect(list.length).toBe(3);
    list.insertAt(30, 555)
    expect(list.length).toBe(4);
    expect(list.getAt(3).value).toBe(555)
    expect(list.head.value).toBe(111);
    expect(list.tail.value).toBe(555);
  });

  test('insert element to the position after end of LinkedList', function () {
    const list = new LinkedList();
    list.append(111).append(222).append(333);
    expect(list.length).toBe(3);
    list.insertAt(3, 555)
    expect(list.length).toBe(4);
    expect(list.getAt(3).value).toBe(555)
    expect(list.head.value).toBe(111);
    expect(list.tail.value).toBe(555);
  });
});


