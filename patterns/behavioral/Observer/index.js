/**
 * 'Observer / Publisher-Subscriber' pattern allows you have one publisher and many another
 * subscribers
 */

/** Using 5/5*/

var Football_magazine = (function () {

  function Magazine() {
    this._handlers = [];
  }

  // add subscriber in array
  Magazine.prototype.subscribe = function (handler) {
    this._handlers.push(handler);
    return this;
  };

  // remove subscriber from array
  Magazine.prototype.unsubscribe = function (handler) {
    var i = 0, length = this._handlers.length;
    for (; i < length; i++) {
      if (this._handlers[i] === handler) {
        this._handlers.splice(i, 1);
        break;
      }
    }
    return this;
  };

  // publish new things for subscribers
  Magazine.prototype.publish = function (data) {
    var i = 0, length = this._handlers.length;
    for (; i < length; i++) {
      this._handlers[i](data);
    }
    return this;
  };

  // remove all subscribers
  Magazine.prototype.reset = function () {
    this._handlers = [];
    return this;
  };

  return Magazine;
})();

// instance of publisher
var BarcelonaMagazine = new Football_magazine();

// subscriber 1
var REALMADRID_MEMBER = {
  readBarcelonaNews: function (data) {
    console.log('Something new about Barcelona: ', data);
  }
}

// subscriber 1
var MANCHESTER_UNITED_MEMBER = {
  readBarcelonaNews: function (data) {
    console.log('News from Barcelona: ', data);
  }
}

// add subscribers
BarcelonaMagazine
  .subscribe(REALMADRID_MEMBER.readBarcelonaNews)
  .subscribe(MANCHESTER_UNITED_MEMBER.readBarcelonaNews);

// publish news =)
BarcelonaMagazine.publish('Messi leave club!');