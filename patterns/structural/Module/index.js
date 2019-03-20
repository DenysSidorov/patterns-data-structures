/**
 * 'Module' pattern allows you create object, and close fields, that you don't want
 * open for another programmers and parts of your application
 */

var FootballTeamModule = (function () {
  // private variable
  var team = [];

  // private function
  var showPriceAllTeam = function () {
    var price = team.reduce(function (prev, cur) {
      return prev + cur.price
    }, 0);
    console.log('Price all team = ', price);
  }

  // private function
  function addNewPlayer(player) {
    team.push(player)
  }

  // private function
  function showAllPlayers() {
    if (team.length) {
      for (var i = 0; i < team.length; i++) {
        console.log(team[i].name);
      }
    } else {
      console.log('Your team is empty');
    }
  }

  // return only open methods
  return {
    showPriceAllTeam: showPriceAllTeam,
    addNewPlayer: addNewPlayer,
    showAllPlayers: showAllPlayers,
  };
}());

// Create new team
var Barcelona = FootballTeamModule;

// one player
var PLAYER_RONALDINHO = {
  name: 'Ronaldinho',
  price: 50000000
}

// one player
var PLAYER_MESSI = {
  name: 'Messi',
  price: 20000000
}

// add players
Barcelona.addNewPlayer(PLAYER_RONALDINHO);
Barcelona.addNewPlayer(PLAYER_MESSI);

// show team
Barcelona.showAllPlayers();

// show team's price
Barcelona.showPriceAllTeam();