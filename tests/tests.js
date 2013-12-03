var expect = require('chai').expect;

var hirestime = require('../');

describe('hirestime', function() {

    it('should return an approximate number of elapsed milliseconds', function(done) {
        var getElapsed = hirestime();

        setTimeout(function() {
            expect(getElapsed()).to.be.within(990, 1100);

            done();
        }, 1000);
    });

});