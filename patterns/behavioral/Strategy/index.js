/**
 * 'Strategy' pattern allows you have one interface, and put another child-classes in close-module,
 * classes have the same behaviour, but different realisation
 */


var FootballTeam = (function () {

  // initial strategy
  var strategy = {
    play: function () {
      console.log('Strategy Simple: 1-2-8. Just play football like schoolboys');
    }
  }

  return {
    // set new strategy
    setStrategy: function (s) {
      strategy = s;
    },
    // function-action for instance-child of interface
    play: function () {
      return strategy.play();
    }
  }

}())

// fire initial behaviour
FootballTeam.play();

// interface without realisation
function TopClubs() {}
TopClubs.prototype.play = function () {};


// class which implements parent interface
function BarcelonaStrategy(){}
BarcelonaStrategy.prototype = Object.create(TopClubs.prototype);
BarcelonaStrategy.prototype.play = function () {
  console.log('Strategy Barcelona: 4-4-2. Play like Gods:)');
};

// another kind of interface realisation, simple-way, not good way, but it works)
RealMadridStrategy = {
  play: function () {
    console.log('Strategy Real Madrid: 4-3-3. Play like lions:)');
  }
}

// set new strategy
FootballTeam.setStrategy(new BarcelonaStrategy());
FootballTeam.play();

// set new strategy
FootballTeam.setStrategy(RealMadridStrategy);
// another strategy which has right and working behaviour!
FootballTeam.play();