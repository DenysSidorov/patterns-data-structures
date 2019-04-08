/**
 * 'Visitor' pattern allows you have visitor-class and client-class, which use visitor and put
 * itself for that visitor. Visitor cans to change client. Could be used in extensions
 */

/** Using 1/5*/

// client class
var FootballStadium = function (name, freePlaces) {
  this.name = name;
  this.freePlaces = freePlaces;

  // main method for accepting visitors
  this.accept = function (visitor) {
    visitor.visit(this);
  }

  // some logic
  this.dicrementPlaces = function () {
    this.freePlaces = this.freePlaces - 1
  }

  // getter
  this.getPlaces = function () {
    return this.freePlaces
  }
}

// visitor-class
function FootballFan(name) {
  this.name = name;

  // main method for manipulating with client-class
  this.visit = function (stadium) {
    stadium.dicrementPlaces();
  }
}

// create client class
var stadium = new FootballStadium('Camp Nou', 99354);
console.log('Free places - ', stadium.getPlaces());

//create visitor-class
var visitor = new FootballFan('Tom');

// client accepts visitor
stadium.accept(visitor);

console.log('Free places - ', stadium.getPlaces());
