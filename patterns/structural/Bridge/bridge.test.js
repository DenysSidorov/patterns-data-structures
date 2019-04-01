var {Car, Wheel, Engine, Petrol} = require('./bridge');

test('In Bridge pattern Wheel class should return expected result', function () {
  var name = 'Michelin';
  var wheel = new Wheel(name);
  expect(wheel.checkWheels()).toBe('Wheels are good!');
  expect(wheel.start()).toBe(`Wheel '${name}' started!`);
})

test('In Bridge pattern Engine class should return expected result', function () {
  var power = '250hp';
  var engine = new Engine(power);
  expect(engine.startEngine()).toBe('Engine was started!');
  expect(engine.addAllPower()).toBe(`Engine switched on all power - '${power}'`);
})

test('In Bridge pattern Petrol class should return expected result', function () {
  var type = 95;
  var petrol = new Petrol(type);
  expect(petrol.check()).toBe(`Petrol is full with '${type}' type `);
})

test('In Bridge pattern Car class should return expected result', function () {
  var petrol = new Petrol(95);
  var engine = new Engine('250hp');
  var wheel = new Wheel('Michelin');

  var car = new Car(wheel, engine, petrol);
  const spy = jest.spyOn(car, 'run');
  car.run();

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith();

})