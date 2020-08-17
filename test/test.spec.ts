import { useFakeTimers } from 'sinon';
import { expect } from 'chai';

import { hiresTimeBrowserDate, hiresTimeBrowserPerformance, hirestimeNode } from '../src/index'

import { hrtimeMock, mockPerformance } from "./timeMocks";

describe('hirestime', () => {
    describe('node', () => {

        it('should return the timestamp when the timer was started in milliseconds', () => {
            const now = process.hrtime()
            const timer = hirestimeNode()
            expect(Math.round(timer.startedAt())).to.equal(Math.round(now[0] * 1e3 + now[1] / 1e6))
        })

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

        it('should return an approximate number of elapsed time in microseconds (microseconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.us()).to.equal(1119111.1)
        })

        it('should return an approximate number of elapsed time in microseconds (microseconds unit)', () => {
            hrtimeMock(1119.1111)
            const getElapsed = hirestimeNode()

            expect(getElapsed.microseconds()).to.equal(1119111.1)
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

        it('should return the timestamp when the timer was started in milliseconds', () => {
            const now = Date.now()
            const timer = hiresTimeBrowserDate()
            expect(Math.round(timer.startedAt())).to.equal(now)
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const clock = useFakeTimers()
            const getElapsed = hiresTimeBrowserDate()
            clock.tick(1119.1111)

            expect(getElapsed()).to.equal(1119)

            clock.restore()
        })
    })

    describe('browserPerformance', () => {

        it('should return the timestamp when the timer was started in milliseconds', () => {
            const now = mockPerformance(1119.1111)
            const timer = hiresTimeBrowserPerformance()
            expect(Math.round(timer.startedAt())).to.equal(0)
        })

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            mockPerformance(1119.1111)
            const getElapsed = hiresTimeBrowserPerformance()
            expect(getElapsed()).to.equal(1119.11)
        })
    })
})
