var Set = require('./set');

test('Set\'s add method should add values', function () {
  var set = new Set();
  set.add(1);
  set.add(2);
  set.add(2);
  set.add(1);
  expect(set.size()).toBe(2);
});

test('Set\'s values method should return values', function () {
  var set = new Set();
  set.add(1);
  set.add(2);
  expect(set.values().toString()).toBe([1, 2].toString());
});

test('Set\'s size method should return length', function () {
  var set = new Set();
  set.add(1);
  set.add(2);
  expect(set.size()).toBe(2);
});

test('Set\'s remove method should rid elment', function () {
  var set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);
  set.remove(2);
  expect(set.size()).toBe(2);
});

test('Set\'s union method should show union with other Set', function () {
  var set1 = new Set();
  var set2 = new Set();
  set1.add(1);
  set1.add(2);
  set2.add(2);
  set2.add(3);
  expect(set1.union(set2).size()).toBe(3);
  expect(set1.union(set2).values().toString()).toBe([1, 2, 3].toString());
});

test('Set\'s intersection method should show intersection with other Set', function () {
  var set1 = new Set();
  var set2 = new Set();
  set1.add(1);
  set1.add(2);
  set2.add(2);
  set2.add(3);
  expect(set1.intersection(set2).size()).toBe(1);
  expect(set1.intersection(set2).values().toString()).toBe([2].toString());
});

test('Set\'s difference method should show difference with other Set', function () {
  var set1 = new Set();
  var set2 = new Set();
  set1.add(1);
  set1.add(2);
  set2.add(2);
  set2.add(3);
  expect(set1.difference(set2).size()).toBe(1);
  expect(set1.difference(set2).values().toString()).toBe([1].toString());
});

test('Set\'s subset method should show subset with other Set', function () {
  var set1 = new Set();
  var set2 = new Set();
  set1.add(1);
  set1.add(2);
  set2.add(2);
  set2.add(3);
  expect(set1.subset(set2)).toBe(false);

  var set3 = new Set();
  var set4 = new Set();
  set3.add(1);
  set3.add(2);
  set4.add(2);
  set4.add(1);
  expect(set3.subset(set3)).toBe(true);
});
