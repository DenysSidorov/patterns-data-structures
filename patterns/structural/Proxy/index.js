/**
 * 'Proxy' pattern allows you to have cash class which uses internal data, but if can't find actual
 * information - tries ask it in another sources. Often it is used by cash approaches.
 */

// class-info with information
class FootballWikipedia {

  getInfoTeamStadium(team) {
    switch (team) {
      case('Barcelona'):return 'Camp Nou';
      case('Chelsea'):return 'Stamford Bridge';
      case('Manchester United'):return 'Old Trafford';
      case('Milan'):return 'San Siro';
      case('Real Madrid'):return 'Santiago Bernabeu';
      case('Lyon'):return 'Groupama';
      case('Bayer'):return 'BayArena';
      default:return 'no-name';
    }
  }
}

// Proxy-class that has cash and use class-info in case when it does't know actual info
class NewFootballLibrary {
  constructor(wikipedia) {
    this.wikipedia = wikipedia; // source of information
    this.stadiumsWiki = {} // main cash of class
  }

  // add new items in cash
  getInfoTeamStadium(team) {
    if (this.stadiumsWiki[team] === undefined) {
      this.stadiumsWiki[team] = this.wikipedia.getInfoTeamStadium(team);
    }
    return this.stadiumsWiki[team];
  }

  // get amount of information in cash
  getWikiStadiumsCount() {
    var count = 0;
    for (var code in this.stadiumsWiki) {
      count++;
    }
    return count;
  }
}

let footballWikipedia = new FootballWikipedia();
let newFootballLibrary = new NewFootballLibrary(footballWikipedia);

// create new requests for library
newFootballLibrary.getInfoTeamStadium('Milan');
newFootballLibrary.getInfoTeamStadium('Milan');
newFootballLibrary.getInfoTeamStadium('Barcelona');
newFootballLibrary.getInfoTeamStadium('Chelsea');
newFootballLibrary.getInfoTeamStadium('Barcelona');

// condition of cash
console.log('Stadiums in library - ', newFootballLibrary.getWikiStadiumsCount());