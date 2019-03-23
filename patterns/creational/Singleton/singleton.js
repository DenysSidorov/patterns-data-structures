/**
 * 'Singleton' pattern allows you have only one instance of object in your application
 */


const Connection = (function () {

  var instance = null;
  var port = '';

  function _Connection(port) {
    if(!instance){
      this.port = port;
      instance = this;
    } else {
      return instance
    }
  }

  _Connection.prototype.getPort = function () {
    return this.port;
  }

  return _Connection;

})();

module.exports = Connection;


/*
*  - 2th type of Singleton - getInstance() method
*  - 3th type of Singleton - get always instance which created with 'new Instance()' before
* */