import * as sinon from 'sinon';
import { expect } from 'chai';

import { hiresTimeBrowserDate, hiresTimeBrowserPerformance, hirestimeNode, MS, NS, S } from './index'
import { mockPerformance, hrtimeMock } from './lib/timeMocks'

describe('hirestime', function () {
    describe('node', () => {
        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed(S)).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed.s()).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed.seconds()).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed(MS)).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed.ms()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed.milliseconds()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed(NS)).to.equal(1119000000)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed.ns()).to.equal(1119000000)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            hrtimeMock(1119)
            const getElapsed = hirestimeNode()

            expect(getElapsed.nanoseconds()).to.equal(1119000000)
        })
    })

    describe('browserDate', () => {
        let clock
        before(() => {
            clock = sinon.useFakeTimers()
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const getElapsed = hiresTimeBrowserDate()
            clock.tick(1119)
            expect(getElapsed()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            const getElapsed = hiresTimeBrowserDate()
            clock.tick(1119)
            expect(getElapsed(S)).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            const getElapsed = hiresTimeBrowserDate()
            clock.tick(1119)
            expect(getElapsed(MS)).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            const getElapsed = hiresTimeBrowserDate()
            clock.tick(1119)
            expect(getElapsed(NS)).to.equal(1119000000)
        })
    })

    describe('browserPerformance', () => {
        before(() => {
            mockPerformance(1119)
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const getElapsed = hiresTimeBrowserPerformance()
            expect(getElapsed()).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in seconds (seconds unit)', () => {
            const getElapsed = hiresTimeBrowserPerformance()
            expect(getElapsed(S)).to.equal(1.12)
        })

        it('should return an approximate number of elapsed time in milliseconds (milliseconds unit)', () => {
            const getElapsed = hiresTimeBrowserPerformance()
            expect(getElapsed(MS)).to.equal(1119)
        })

        it('should return an approximate number of elapsed time in nanoseconds (nanoseconds unit)', () => {
            const getElapsed = hiresTimeBrowserPerformance()
            expect(getElapsed(NS)).to.equal(1119000000)
        })
    })
})

module.exports = hrtimeMock;