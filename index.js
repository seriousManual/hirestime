var S = 'seconds';
var MS = 'milliseconds';
var NS = 'nanoseconds';

function hirestime() {
    var start = process.hrtime();

    return function(unit) {
        var elapsed = process.hrtime(start);

        var time;
        if(unit === S) time = elapsed[0] + elapsed[1] / 1e9;
        else if(unit === NS) time = elapsed[0] * 1e9 + elapsed[1];
        else if(unit === MS || !unit || !time) time = elapsed[0] * 1e3 + elapsed[1] / 1e6;

        return parseInt(time * 100, 10) / 100;
    }
}

hirestime.S = S;
hirestime.MS = MS;
hirestime.NS = NS;

module.exports = hirestime;