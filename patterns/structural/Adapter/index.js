/**
 * 'Adapter' pattern allows you create new class with new functionality, but if you want to save
 * old functionality. In this case you can use Adapter pattern instead of old class.
 * Method's semantics and invoke approach will be the same like for old class.
 *
 * */

// old approach
class YoungPlayer {
  play(speed, position, opponents) {
    return speed * position * opponents
  }
}

// create new functionality
class SkilledPlayer {
  // job of this method doesn't matter
  playAgainst(opponents) {
    return opponents * 1.5;
  }

  // job of this method doesn't matter
  getPosition(position, speed) {
    return position * speed + 10;
  }

  // return new count, this method exists instead play() method in old class
  runGame(speed, position, opponents) {
    return this.playAgainst(opponents) * this.getPosition(speed, position)
  }
}


class PlayerAdapter {
  constructor() {
    this.player = new SkilledPlayer();
  }

  // use old semantics for invoking new class
  play(speed, position, opponents) {
    return this.player.runGame(speed, position, opponents)
  }
}

// work of old class
let youngPlayer = new YoungPlayer();
let oldResult = youngPlayer.play(15, 10, 2);
console.log('Old - ', oldResult);

// work of new class
let adapter = new PlayerAdapter();
let newResult = adapter.play(15, 10, 2);
console.log('New - ', newResult);
