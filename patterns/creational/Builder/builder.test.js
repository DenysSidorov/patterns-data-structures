var {Builder, BuilderX5, BMW_X5}  = require('./builder');

test('Builder tests', function () {
  var builder = new Builder();
  var BMWBuilder = new BuilderX5('red');
  const spy = jest.spyOn(builder, 'build');
  var car = builder.build(BMWBuilder);
  expect(spy).toHaveBeenCalled();
});