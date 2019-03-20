/**
 * 'Decorator' pattern allows you wrap your exist object and add new features,
 * instead of using inheritance. Very common way in javascript.
 */

// create player class that cans only play soccer
var Player = (function () {
  function Player() {
  }

  // add action
  Player.prototype.play = function () {
    console.log('I can just play');
  }
  return Player;
}())


// create new class-skill for running
function RunSkill(player) {
  var play = player.play;
  player.play = function () {
    // add old skills
    play.apply(player, arguments)
    // add new skill
    console.log('I can run');
  }
  return player;
}

// create new class-skill for hitting
function HitSkill(player) {
  var play = player.play;
  player.play = function () {
    play.apply(player, arguments)
    console.log('I can hit');
  }
  return player;
}

// create new class-skill for dribbling
function DribblingSkill(player) {
  var play = player.play;
  player.play = function () {
    play.apply(player, arguments)
    console.log('I can do dribbling');
  }
  return player;
}

// create Soccer guy, which name is Mike, and we add new skills
var MikePlayer = new RunSkill(new DribblingSkill(new HitSkill(new Player())));

// run Mike
MikePlayer.play();