import * as sinon from 'sinon';
import { expect } from 'chai';

import { hiresTimeBrowserDate, hiresTimeBrowserPerformance, hirestimeNode } from './index'
import { mockPerformance, hrtimeMock } from './lib/timeMocks'

describe('hirestime', function () {
    describe('node', () => {
        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed()).to.equal(1119.11)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.s()).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.seconds()).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.ms()).to.equal(1119.11)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.milliseconds()).to.equal(1119.11)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.ns()).to.equal(1119111100)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.nanoseconds()).to.equal(1119111100)
        })
    })

    describe('browserDate', () => {
        let clock
        before(() => {
            clock = sinon.useFakeTimers()
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const getElapsed = hiresTimeBrowserDate()
            clock.tick(1119.1111)
            expect(getElapsed()).to.equal(1119)
        })
    })

    describe('browserPerformance', () => {
        before(() => {
            mockPerformance(1119.1111)
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const getElapsed = hiresTimeBrowserPerformance()
            expect(getElapsed()).to.equal(1119.11)
        })
    })
})

module.exports = hrtimeMock;