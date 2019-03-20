/**
 * 'Composite' pattern allows you have main node which leafs. You can build flexible structure.
 * All nodes can be a leafs of another nodes.
 */


function Player(name) {
  this.name = name;
}

Player.prototype.display = function () {
  console.log(this.name);
}

function Team(name) {
  this.name = name;
  this.players = [];
}

Team.prototype.add = function (player) {
  this.players.push(player);
}

Team.prototype.remove = function (player) {
  for (let i = 0, length = this.players.length; i < length; i++) {
    if (this.players[i] === player) {
      this.players.splice(i, 1);
      return true;
    }
  }
  return false;
}

Team.prototype.getPlayerName = function (index) {
  return this.players[index].name;
}

Team.prototype.display = function() {
  console.log(this.name);
  for (let i = 0, length = this.players.length; i < length; i++) {
    console.log("   ", this.getPlayerName(i));
  }
}

team1 = new Team('Real Madrid');
team2 = new Team('Manchester United');
team3 = new Team('Juventus');

player1 = new Player('Cristiano Ronaldo');
player2 = new Player('Beckham');
player3 = new Player('Zidan');

team1.add(player1);
team1.add(player2);
team1.add(player3);

team2.add(player1);
team2.add(player2);

team3.add(player1);
team3.add(player3);


team1.display();
team2.display();
team3.display();

/*
Real Madrid
    Cristiano Ronaldo
    Beckham
    Zidan
Manchester United
    Cristiano Ronaldo
    Beckham
Juventus
    Cristiano Ronaldo
    Zidan

*/