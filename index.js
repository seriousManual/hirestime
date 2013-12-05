var S = 'seconds';
var MS = 'milliseconds';
var NS = 'nanoseconds';

function hirestime() {
    var start = process.hrtime();

    return function(unit) {
        var elapsed = process.hrtime(start);

        return recalc(elapsed[0] * 1e3 + elapsed[1] / 1e6, unit);
    }
}

function recalc(msTime, unit) {
    var time;
    if(!unit || unit === MS)  time = msTime;
    if(unit === S) time = msTime / 1000;
    if(unit === NS) time = msTime * 1000;
    if(!time) time = msTime;

    return parseInt(time * 100, 10) / 100;
}

hirestime.S = S;
hirestime.MS = MS;
hirestime.NS = NS;

module.exports = hirestime;