var expect = require('chai').expect;

var hirestime = require('../');

describe('hirestime', function() {

    it('should return an approximate number of elapsed time in milliseconds (no unit given)', function(done) {
        var getElapsed = hirestime();

        setTimeout(function() {
            expect(getElapsed()).to.be.within(90, 110);

            done();
        }, 100);
    });

    it('should return an approximate number of elapsed time in seconds (seconds unit)', function(done) {
        var getElapsed = hirestime();

        setTimeout(function() {
            expect(getElapsed(hirestime.S)).to.be.within(0.09, 0.11);

            done();
        }, 100);
    });

    it('should return an approximate number of elapsed time in seconds (milliseconds unit)', function(done) {
        var getElapsed = hirestime();

        setTimeout(function() {
            expect(getElapsed(hirestime.MS)).to.be.within(90, 110);

            done();
        }, 100);
    });

    it('should return an approximate number of elapsed time in seconds (nanoseconds unit)', function(done) {
        var getElapsed = hirestime();

        setTimeout(function() {
            expect(getElapsed(hirestime.NS)).to.be.within(90000, 110000);

            done();
        }, 100);
    });

});