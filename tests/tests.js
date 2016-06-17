var expect = require('chai').expect
var hrtimeMock = require('hrtimemock')

var hirestime = require('../')

describe('hirestime', function() {

    it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
        hrtimeMock(1119)
        var getElapsed = hirestime()

        expect(getElapsed()).to.equal(1119)
    })

    it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
        hrtimeMock(1119)
        var getElapsed = hirestime()

        expect(getElapsed(hirestime.S)).to.equal(1.12)
    })

    it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
        hrtimeMock(1119)
        var getElapsed = hirestime()

        expect(getElapsed(hirestime.MS)).to.equal(1119)
    })

    it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
        hrtimeMock(1119)
        var getElapsed = hirestime()

        expect(getElapsed(hirestime.NS)).to.equal(1119000000)
    })
})