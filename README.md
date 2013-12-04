# hirestime

...because there aren't enough hrtime wrappers yet.

[![NPM](https://nodei.co/npm/hirestime.png)](https://nodei.co/npm/hirestime/)

[![NPM](https://nodei.co/npm-dl/hirestime.png?months=3)](https://nodei.co/npm/hirestime/)

hirestime is a thin wrapper around `process.hrtime()` that returns an function on invocation.
when these function is invoked the elapsed time in millesconds will be returned:

````javascript
var hirestime = require('../');

//startpoint of the time measurement
var getElapsed = hirestime();

setTimeout(function() {
    //returns the elapsed milliseconds
    console.log(getElapsed());
}, 1000);
````
