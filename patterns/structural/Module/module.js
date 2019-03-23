/*
* addCar
* getPrice
* getCountOfCars
* _getCarsArray xxx
* _cars = []
* */

var Garage = (function () {

  function _Garage() {}

  function addCar(car) {
    _addCarInArray(car);
  }

  function getCountOfCars() {
    return _getCarsArray().length;
  }

  function getPrice() {
    return _getCarsArray().reduce((prev, cur) => {
      return Number.parseInt(prev, 10) + Number.parseInt(cur.price, 10);
    }, 0)
  }

  function _getCarsArray() {
    return CarsModule.getCarsArray();
  }

  function _addCarInArray(car) {
    CarsModule.addCarInArray(car);
  }

  _Garage.prototype.addCar = addCar;
  _Garage.prototype.getCountOfCars = getCountOfCars;
  _Garage.prototype.getPrice = getPrice;

  return _Garage;
})();

var CarsModule = (function () {
  var _cars = [];
  return {
    getCarsArray: function () {
      return _cars;
    },
    addCarInArray: function (car) {
      _cars.push(car);
    }
  }
})();

module.exports = Garage;