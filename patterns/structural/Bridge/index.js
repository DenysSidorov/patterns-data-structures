/**
 * 'Bridge' pattern allows you to have abstraction under main class. Both independently can be
 *  can be changed with very easy way.
 */

// one abstraction with realisation, we can create another
var FootballBootsNike = function () {
  this.run = function () { console.log('Run in football boots Nike'); }
  this.kick = function () { console.log('Kick in football boots Nike'); }
  this.jump = function () { console.log('Jump in football boots Nike');  }
};

// consumer of abstraction
var FootballPlayer = function (boots) {
  this.boots = boots;
  // use realisation of another class
  this.fastRunning = function () { this.boots.run(); }
  this.hitToTarget = function () { this.boots.kick(); }
  this.jumpAboveBall = function () { this.boots.jump(); }
};

var boots = new FootballBootsNike();
var player = new FootballPlayer(boots);

player.fastRunning();
player.hitToTarget();
player.jumpAboveBall();
