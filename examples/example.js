var hirestime = require('../');

//startpoint of the time measurement
var getElapsed = hirestime();

setTimeout(function() {
    //returns the elapsed milliseconds
    console.log(getElapsed());

    console.log(getElapsed(hirestime.S));
    console.log(getElapsed(hirestime.MS));
    console.log(getElapsed(hirestime.NS));

    console.log(getElapsed.seconds());
    console.log(getElapsed.milliseconds());
    console.log(getElapsed.nanoseconds());

    console.log(getElapsed.s());
    console.log(getElapsed.ms());
    console.log(getElapsed.ns());
}, 1000);