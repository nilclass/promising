
var promiseTests = require('promises-aplus-tests');
var adapter = require('./promising-adapter');

promiseTests(adapter, function() {
  console.log("Tests all done.");
});
