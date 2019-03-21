const YoutubeChannel = require('./observer');

var channel;

beforeEach(() => {
  channel = new YoutubeChannel('My own youtube channel');
});

afterEach(function () {
  channel = new YoutubeChannel('My own youtube channel');
});

// clients:
var User1 = {
  id: 1,
  name: 'Denis',
  readNews: function (news) {
    return `${this.name} got fresh news: ${news}`;
  }
}

var User2 = {
  id: 2,
  name: 'Marry',
  readNews: function (news) {
    return `${this.name} got fresh news: ${news}`;
  }
}

test('count of subscribers should be 1', () => {
  channel.subscribe(User1);
  expect(channel.subscribers.length).toBe(1);
});

test('count of subscribers should be 2', () => {
  channel
    .subscribe(User1)
    .subscribe(User2);
  expect(channel.subscribers.length).toBe(2);
});

test("unsubscribe user shouldn't be in subscribers", () => {
  channel
    .subscribe(User1)
    .subscribe(User2)
    .unsubscribe(User1);
  let user1 = channel.subscribers.find((user) => user.id === User1.id);
  expect(user1).toBe(undefined);
});

test("reset function should remove all subscribers", () => {
  channel
    .subscribe(User1)
    .subscribe(User2)
    .unsubscribe(User1)
    .subscribe(User1)
    .reset();

  expect(channel.subscribers.length).toBe(0);
});


test('publish function should fire handler in every User', () => {
  const data = 'New Info';
  const spy = jest.spyOn(User2, 'readNews');

  channel
    .subscribe(User1)
    .subscribe(User2)
    .publishNews(data);

  expect(User2.readNews(data)).toBe(`${User2.name} got fresh news: ${data}`);
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith(data);

  spy.mockRestore();
});