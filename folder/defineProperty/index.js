var team = {
  'second-coach': 'Vasya Pupkin'
};

var coachTeam = ''
Object.defineProperty(team, 'coach', {
  // configurable: true, // default - false  // we will be able to delete, or configure this prop
  enumerable: true, // default - false // we will be able to use it in for..in, Object.keys
  // writable : true, // default - false // we will be able rewrite this value
  // value: 'Lobanovskiy', // we cant't use it with get() function!
  get: function () {
    return coachTeam; // can't use coach It will fire calling itself
  },
  set: function (value) {
    coachTeam = value
  },

})

team.coach = 'new man';
console.log(team.coach);

console.log(team.propertyIsEnumerable('coach')) // function for checking is enumerable or not this prop