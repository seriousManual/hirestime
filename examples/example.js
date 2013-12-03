var hirestime = require('../');

//startpoint of the time measurement
var getElapsed = hirestime();

setTimeout(function() {
    //returns the elapsed milliseconds
    console.log(getElapsed());
}, 1000);