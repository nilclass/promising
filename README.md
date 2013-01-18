
Implementation of [Promises/A+](http://promises-aplus.github.com/promises-spec/)

[![Build Status](https://secure.travis-ci.org/nilclass/promising.png)](http://travis-ci.org/nilclass/promising)


## Usage:

Creating a promise:

    var promising = require('promising');
   
    function myAsyncFunction() {
      var promise = promising();
      // do something...
      return promise;
    }

Fulfilling a promise:

    function myAsyncFunction() {
      var promise = promising();
      setTimeout(function() {
        promise.fulfill(42);
      }, 2000);
      return promise;
    }

Rejecting a promise:

    function myAsyncFunction() {
      var promise = promising();
      setTimeout(function() {
        promise.reject(24);
      }, 2000);
      return promise;
    }

That's about it.

