/**
 * 'Singleton' pattern allows you have only one instance of object in your application
 */

var CRonaldo_Singleton = (function () {

  var instance;

  var speed = 35;

  // main method, that implements Singleton logic
  function CRonaldo() {
    if (!instance) {
      instance =  this;
    } else {
      return instance
    }
  }

  // open method for another code
  CRonaldo.prototype.getSpeed = function () {
    console.log(speed);
  }

  return CRonaldo;

}());

var player1 =  new CRonaldo_Singleton();
var player2 =  new CRonaldo_Singleton();

console.log(player1 === player2);

player2.getSpeed();