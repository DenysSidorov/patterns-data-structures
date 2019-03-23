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


// var bdConnection = new Connection('8080');
// var bdConnection2 = new Connection('433');
// console.log(bdConnection2.getPort());

module.exports = Connection;