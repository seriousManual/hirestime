var expect = require('chai').expect;
var hrtimeMock = require('hrtimemock');

var hirestime = require('../');

describe('hirestime', function() {

    it('should return an approximate number of elapsed time in milliseconds (no unit given)', function() {
        hrtimeMock(100);
        var getElapsed = hirestime();

        expect(getElapsed()).to.equal(100);
    });

    it('should return an approximate number of elapsed time in seconds (seconds unit)', function() {
        hrtimeMock(100);
        var getElapsed = hirestime();

        expect(getElapsed(hirestime.S)).to.equal(0.1);
    });

    it('should return an approximate number of elapsed time in seconds (milliseconds unit)', function() {
        hrtimeMock(100);
        var getElapsed = hirestime();

        expect(getElapsed(hirestime.MS)).to.equal(100);
    });

    it('should return an approximate number of elapsed time in seconds (nanoseconds unit)', function() {
        hrtimeMock(100);
        var getElapsed = hirestime();

        expect(getElapsed(hirestime.NS)).to.equal(100000);
    });

    it('should return an approximate number of elapsed time in seconds (unknown unit)', function() {
        hrtimeMock(100);
        var getElapsed = hirestime();

        expect(getElapsed('foo')).to.equal(100);
    });
});