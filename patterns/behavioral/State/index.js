/**
 * 'State' pattern allows you to have one class with only one state in one time,
 * but to change the state and put itself for next state. Next state will be used
 * for main class
 */

// main class with current state (currentPlayer)
class Ball {
  constructor(circles) {
    this.circles = circles;
    this.attempt = 0;
    this.currentPlayer = new Messi(this);
  }

  // change state
  changePlayer(player) {
    this.attempt++;
    if (this.attempt < this.circles) {
      this.currentPlayer = player;
      this.currentPlayer.pass();
    } else {
      return;
    }
  }

  // start game
  start() {
    this.currentPlayer.pass();
  }
}

// one state
class Messi {
  constructor(ball) {
    this.ball = ball;
  }

  // cans to pass responsibility to another state
  pass() {
    console.log('Messi has ball');
    this.ball.changePlayer(new Ronaldo(this.ball));
  }
}

// one state
class Ronaldo {
  constructor(ball) {
    this.ball = ball;
  }

  // cans to pass responsibility to another state
  pass() {
    console.log('Ronaldo has ball');
    this.ball.changePlayer(new Neymar(this.ball));
  }
}

// one state
class Neymar {
  constructor(ball) {
    this.ball = ball;
  }

  // cans to pass responsibility to another state
  pass() {
    console.log('Neymar has ball');
    this.ball.changePlayer(new Messi(this.ball));
  }
}

// here we create main state and start new game
new Ball(4).start();
