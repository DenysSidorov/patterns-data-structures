/**
 * 'Chain of responsibility' pattern allows you to use class, which return itself every time,
 * it can be used in long chain of calls
 */

// main class
function Player() {
  this.skills = {}
}

// add skill
Player.prototype.addSkill = function (skill) {
  this.skills[skill] = true;
  // return itself
  return this;
}

// get skills
Player.prototype.getSkills = function () {
  for (var skill in this.skills) {
    console.log(skill);
  }
}

// long calls chain
new Player().addSkill('move').addSkill('jump').addSkill('kick').addSkill('pass').getSkills();