/**
 * 'Memento' pattern allows you to save every step in one place, and then read all list.
 */

/** Using 2/5*/

// data
function FifaGame(team, time, score){
  this.team = team;
  this.time = time;
  this.score = score;
}

FifaGame.prototype = {
  // save data
  save: function() {
    var memento = JSON.stringify(this);
    return memento;
  },

  // read data
  read: function(memento) {
    var m = JSON.parse(memento);
    this.team = m.team;
    this.time = m.time;
    this.score = m.score;
  }
}

// list of steps
function FootballSeasonList() {
  this.maps = {}
  this.add = function (key, map) {
      this.maps[key] = map
  }
  this.get = function (key) {
    return this.maps[key]
  }
}

// add new data
var game1 = new FifaGame('Barcelona', '20.12.2025', '1');
var game2 = new FifaGame('Barcelona', '05.01.2026', '3');
var game3 = new FifaGame('Barcelona', '14.01.2026', '4');

// save data in one place
var footballSeasonList = new FootballSeasonList();
footballSeasonList.add(1, game1.save());
footballSeasonList.add(2, game2.save());
footballSeasonList.add(3, game3.save());

// try to hard modify data
game2.score = 100;
console.log(game2);

// but can to get old data
console.log(JSON.parse(footballSeasonList.get(2)))  ;

