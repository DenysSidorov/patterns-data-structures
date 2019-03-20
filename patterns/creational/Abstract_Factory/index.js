/**
 * 'Abstract Factory' pattern allows you have one useful interface, which used in particular
 * classes, those classes use particular instances of that interface. Very abstract approach but,
 * help you to work with too many parents and children of one interface
 */


// main interface
function Player(){}
Player.prototype.play = function (){}

// simple class
function EnglandPlayer(name, academyName) {
  this.name = name;
  this.academyName = academyName;
  this.play = function () {
    console.log(this.academyName, ' - ', this.name);
  }
}
EnglandPlayer.prototype = Object.create(Player.prototype);
EnglandPlayer.prototype.constructor = EnglandPlayer;

// factory-method pattern used here for creating instance of simple class
function ManchesterUnitedAcademy() {
  this.academyName = 'Man Utd Academy';
  this.create = function (name) {
    return new EnglandPlayer(name, this.academyName);
  }
}

// simple class
function SpainPlayer(name, academyName) {
  this.name = name;
  this.academyName = academyName;
  this.play = function () {
    console.log(this.academyName, ' - ', this.name);
  }
}
SpainPlayer.prototype = Object.create(Player.prototype);
SpainPlayer.prototype.constructor = SpainPlayer;

// factory-method pattern used here for creating instance of simple class
function ValenciaAcademy() {
  this.academyName = 'Valencia CF Academy';
  this.create = function (name) {
    return new SpainPlayer(name, this.academyName);
  }
}

// it uses abstract factories
var team = [];
var manchesterUnitedAcademy = new ManchesterUnitedAcademy();
var valenciaAcademy = new ValenciaAcademy();

team.push(manchesterUnitedAcademy.create("Gerald Watson"));
team.push(manchesterUnitedAcademy.create("Nicole McNight"));
team.push(valenciaAcademy.create("Joan DiSilva"));
team.push(valenciaAcademy.create("Portush Costa"));

// each member of team cans to play, because it's the child of main interface
for (var i = 0, len = team.length; i < len; i++) {
  team[i].play();
}


