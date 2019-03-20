/**
 * 'Mediator' pattern allows you have mediator-class which send and register clients. Clients
 * can have opportunity send messages to all or another single client. SocketIO
 * library uses it  approach. Additionally it disables relates between classes.
 */

// mediator class
class TransfersAssociation {
  constructor() {
    this.leagues = [];
  }

  // register clients
  register(league) {
    this.leagues.push(league);
    league.association = this;
  }

  // send messages all or single client
  send(message, from, to) {
    if (to) {
      to.recieve(message, from)
    } else {
      this.leagues.forEach(el => {
        if (el !== from) {
          el.receive(message, from)
        }
      })
    }
  }
}

// client class
class FootballLeague {

  constructor(name) {
    this.name = name;
    this.association = null;
  }

  getName() {
    return this.name
  }

  // client cans receive message
  receive(message, from) {
    console.log(from.name, 'to', this.getName(), ', ', message);//
  }
  // client cans send message
  send(message, to) {
    this.association.send(message, this, to);
  }
}

// create client instances
let leagueEngland = new FootballLeague('England');
let leagueSpain = new FootballLeague('Spain');
let leagueBrazil = new FootballLeague('Brazil');
let leagueJapan = new FootballLeague('Japan');

// create mediator instance
let transfersAssociation = new TransfersAssociation();

// register all clients in mediator
transfersAssociation.register(leagueEngland);
transfersAssociation.register(leagueSpain);
transfersAssociation.register(leagueBrazil);
transfersAssociation.register(leagueJapan);

// we can send distinct messages, or messages for all
leagueJapan.send("Hey world, we are selling good players!");
leagueEngland.send("Hey, Spain! We can sell you our captain per 100 millions", leagueSpain);