
var promising = require('../src/promising');

module.exports = {
  fulfilled: function(value) {
    var promise = promising();
    promise.fulfill(value);
    return promise;
  },
  rejected: function(reason) {
    var promise = promising();
    promise.reject(reason);
    return promise;
  },
  pending: function() {
    var promise = promising();
    return {
      promise: promise,
      reject: promise.reject,
      fulfill: promise.fulfill
    };
  }
};