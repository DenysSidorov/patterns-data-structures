/**
 * private_method don't have access to new Object's variables
 * */

function User() {
  this.name = 'Tom';

  // using common case in javascript
  var self = this;

  // in new Object this method won't be working
  function private_method() {
    // console.log(this.name); // this == window or global object
    console.log(self.name); // save 'this' in variable 'self'
  }

  // invoke private method without inner context
  this.getNameByPM = function () {
    private_method();
  }

  // this is working perfectly for 'new Object'
  this.getName = function () {
    console.log(this.name);
  }

  // have sense only for 'new Object'
  return this
}

new User().getNameByPM();

// use constructor like simple function, it modifies global object!
// User().getName();
// console.log(name);
