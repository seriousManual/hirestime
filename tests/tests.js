var expect = require('chai').expect;
var hrtimeMock = require('hrtimemock');

var hirestime = require('../');

describe('hirestime', function() {

    it('should return an approximate number of elapsed time in milliseconds (no unit given)', function() {
        hrtimeMock(1100);
        var getElapsed = hirestime();

        expect(getElapsed()).to.equal(1100);
    });

    it('should return an approximate number of elapsed time in seconds (seconds unit)', function() {
        hrtimeMock(1100);
        var getElapsed = hirestime();

        expect(getElapsed(hirestime.S)).to.equal(1.1);
    });

    it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', function() {
        hrtimeMock(1100);
        var getElapsed = hirestime();

        expect(getElapsed(hirestime.MS)).to.equal(1100);
    });

    it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', function() {
        hrtimeMock(1100);
        var getElapsed = hirestime();

        expect(getElapsed(hirestime.NS)).to.equal(1100000000);
    });

    it('should return an approximate number of elapsed time in milliseconds (unknown unit)', function() {
        hrtimeMock(1100);
        var getElapsed = hirestime();

        expect(getElapsed('foo')).to.equal(1100);
    });
});