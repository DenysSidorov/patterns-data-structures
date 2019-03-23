const Connection = require('./singleton');

var c = null;
describe('Singleton', function () {
  test('Singleton test', () => {
    var c = new Connection(9900);
    expect(c.getPort()).toBe(9900);
  });


  test('Singleton test 2', () => {
    var c = new Connection(7700);
    expect(c.getPort()).not.toBe(7700);
  });
})
