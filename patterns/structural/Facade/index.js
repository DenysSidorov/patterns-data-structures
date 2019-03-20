/**
 * 'Facade' pattern allows you have one main class, which encapsulate difficult logic in calling
 *  one simple method.
 */

// crete instance of facade-class and call main method
var stadium = new BuildingCompany().buildStadium('Odessa-Arena', 100000);

console.log('Name -', stadium.name);
console.log('Price -', stadium.price + '$');


// Facade class
function BuildingCompany() {
  // main method
  this.buildStadium = function (name, places) {
    // put some logic here
    var carsCompany = new CarsCompany();
    var cars = carsCompany.getCars();
    var buses = carsCompany.getBuses();
    var personalCompany = new PersonalCompany();
    var personalSport = personalCompany.hireSportPersonal(80);
    var personalStadium = personalCompany.hireStadiumPersonal(300);
    var sportClothCompany = new SportClothCompany();
    var cloth = sportClothCompany.getSportCloth(300);
    var shoeses = sportClothCompany.getSportShoes(300);
    var stadium = new BuilderBigCovers().buildStadiumCover(places, name);
    return {
      price: cars.price + buses.price + personalSport.price +
      personalStadium.price + cloth.price + shoeses.price + stadium.price,
      name: stadium.name
    }
  }
  this.buildAirport = function () {
    // @todo
  }
  this.buildBank = function () {
    // @todo
  }
}

// class which describe creating cars and buses
function CarsCompany() {
  this.getBuses = function () {
    return {buses: ['Volvo', 'Mercedes', 'Mitsubishi'], price: 130000}
  }
  this.getCars = function () {
    return {cars: ['BMW', 'Lexus', 'Ferrari'], price: 150000}
  }
}

// class which describe creating personal
function PersonalCompany() {
  this.hireSportPersonal = function (count) {
    var salary = 2500;
    return {members: count, price: count * salary}
  }
  this.hireStadiumPersonal = function (count) {
    var salary = 1300;
    return {members: count, price: count * salary}
  }
  this.hireBankPersonal = function () {
    // @todo
  }
}

// class which describe creating clothes
function SportClothCompany() {
  this.getSportCloth = function (count) {
    var price = 100;
    return {price: count * price}
  }
  this.getSportShoes = function (count) {
    var price = 250;
    return {price: count * price}
  }
}

// class which describe building new covers
function BuilderBigCovers() {
  this.buildStadiumCover = function (places, name) {
    var placePrice = 1000;
    return {name: name, price: places * placePrice}
  }
  buildAirport = function () {
    // @todo
  }
  this.buildSupermarket = function () {
    // @todo
  }
}



