'use strict'

const sinon = require('sinon')
const expect = require('chai').expect
const hrtimeMock = require('hrtimemock')

const hirestime = require('./')

describe('hirestime', function () {

    describe('node', () => {
        let hirestime
        before(() => hirestime = require('./').node)

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestime()

            expect(getElapsed()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestime()

            expect(getElapsed(hirestime.S)).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestime()

            expect(getElapsed(hirestime.MS)).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestime()

            expect(getElapsed(hirestime.NS)).to.equal(1119000000)
        })
    })

    describe('browserDate', () => {
        let browserHirestime
        let clock
        before(() => {
            clock = sinon.useFakeTimers()

            browserHirestime = require('./').browserDate
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const getElapsed = browserHirestime()
            clock.tick(1119)
            expect(getElapsed()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            const getElapsed = browserHirestime()
            clock.tick(1119)
            expect(getElapsed(hirestime.S)).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            const getElapsed = browserHirestime()
            clock.tick(1119)
            expect(getElapsed(hirestime.MS)).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            const getElapsed = browserHirestime()
            clock.tick(1119)
            expect(getElapsed(hirestime.NS)).to.equal(1119000000)
        })
    })

    describe('browserPerformance', () => {
        let browserHirestimePerformance

        before(() => {
            mockPerformance(1119)
            browserHirestimePerformance = require('./').hiresTimeBrowserPerformance
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const getElapsed = browserHirestimePerformance()
            expect(getElapsed()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            const getElapsed = browserHirestimePerformance()
            expect(getElapsed(hirestime.S)).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            const getElapsed = browserHirestimePerformance()
            expect(getElapsed(hirestime.MS)).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            const getElapsed = browserHirestimePerformance()
            expect(getElapsed(hirestime.NS)).to.equal(1119000000)
        })
    })
})

function mockPerformance (msTime) {
    let isFirst = true
    let random = parseInt(Math.random() * 1000000, 10)

    global.window = {
        performance: {
            now: () => {
                if (isFirst) {
                    isFirst = false;

                    return random;
                } else {
                    isFirst = true;

                    return random + msTime;
                }
            }
        }
    }
}