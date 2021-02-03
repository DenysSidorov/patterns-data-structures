/**
 *
 * This pattern allows you to separate the implementation and creation of a particular object.
 */

/** Using 4/5*/


// interface
function FootballSchool() {
  this.getPlayer = null
}

// realisation of interface and method
function BarcelonaSchool() {
  var players = ['Fernandez', 'Gonzalez', 'Lopez', 'Sanchez', 'Gomez', 'Rodriguez']
  this.getPlayer = function () {
    return players[getRandomInt(0, players.length - 1)]
  }
}

// realisation of interface and method
function LiverpoolSchool() {
  var players = ['Johnson', 'Smith', 'Williams', 'Scott', 'Jones', 'Harris'];
  this.getPlayer = function () {
    return players[getRandomInt(0, players.length - 1)]
  }
}

// interface
function SearchAgent() {
  this.findSchool = null;
}

// realisation of interface and method
function SearchAgentEngland() {
  this.findPlayer = function () {
    // use real instance in abstraction
    return new LiverpoolSchool().getPlayer();
  }
}

// realisation of interface and method
function SearchAgentSpain() {
  this.findPlayer = function () {
    // use real instance in abstraction
    return new BarcelonaSchool().getPlayer();
  }
}

// using Factory-method approach
console.log(new SearchAgentEngland().findPlayer());
console.log(new SearchAgentSpain().findPlayer());

// helper
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
