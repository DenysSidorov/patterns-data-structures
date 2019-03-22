/**
 * 'Observer / Publisher-Subscriber' pattern allows you have one publisher and many another
 * subscribers
 */

// todo tests

var YoutubeChannel = (function () {

  function YoutubeChannel(name) {
    this.name = name;
    this.subscribers = []
  }

  YoutubeChannel.prototype.subscribe = function (subscriber) {
    this.subscribers.push(subscriber);
    return this;
  }

  YoutubeChannel.prototype.unsubscribe = function (subscriber) {
    this.subscribers = this.subscribers.filter((item) => item.id !== subscriber.id);
    return this;
  }

  YoutubeChannel.prototype.reset = function () {
    this.subscribers = [];
    return this;
  }

  YoutubeChannel.prototype.publishNews = function (news) {
    this.subscribers.forEach(user => user.readNews(news));
    return this;
  }

  return YoutubeChannel;
})();

// clients:
var User1 = {
  id: 1,
  name: 'Denis',
  readNews: function (news) {
    return(`${this.name} got fresh news: ${news}`);
  }
}

var User2 = {
  id: 2,
  name: 'Marry',
  readNews: function (news) {
    return(`${this.name} got fresh news: ${news}`);
  }
}

var channel = new YoutubeChannel('My own youtube channel');

channel
  .subscribe(User1)
  .subscribe(User2);

channel.publishNews('We have 1m users!');

module.exports = YoutubeChannel;

