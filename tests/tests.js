var sinon = require('sinon')
var expect = require('chai').expect
var hrtimeMock = require('hrtimemock')

describe('hirestime', function() {

    describe('node', () => {
        var hirestime
        before(() => hirestime = require('../'))
        after(() => {
            delete require.cache[require.resolve('../')]
        })

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

    describe('browser', () => {
        var hirestime
        var tmpHirestime = process.hrtime
        var clock
        before(() => {
            tmpHirestime = process.hrtime
            process.hrtime = null
            clock = sinon.useFakeTimers()

            hirestime = require('../')
        })
        after(() => process.hrtime = tmpHirestime)

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            var getElapsed = hirestime()
            clock.tick(1119)
            expect(getElapsed()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            var getElapsed = hirestime()
            clock.tick(1119)
            expect(getElapsed(hirestime.S)).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            var getElapsed = hirestime()
            clock.tick(1119)
            expect(getElapsed(hirestime.MS)).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            var getElapsed = hirestime()
            clock.tick(1119)
            expect(getElapsed(hirestime.NS)).to.equal(1119000000)
        })
    })
})