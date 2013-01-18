
var promiseTests = require('promise-tests');
var adapter = require('./promising-adapter');

promiseTests(adapter, ['promises-a', 'always-async', 'returning-a-promise'],
             function() {
               console.log("Tests all done.");
             });
