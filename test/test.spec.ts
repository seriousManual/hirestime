import { useFakeTimers } from 'sinon';
import { expect } from 'chai';

import { hiresTimeBrowserDate, hiresTimeBrowserPerformance, hirestimeNode } from 'index'

import { hrtimeMock, mockPerformance } from "./timeMocks";

describe('hirestime', () => {
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

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            const clock = useFakeTimers()
            const getElapsed = hiresTimeBrowserDate()
            clock.tick(1119.1111)

            expect(getElapsed()).to.equal(1119)

            clock.restore()
        })
    })

    describe('browserPerformance', () => {

        it('should return an approximate number of elapsed time in milliseconds (no unit given)', () => {
            mockPerformance(1119.1111)
            const getElapsed = hiresTimeBrowserPerformance()

            expect(getElapsed()).to.equal(1119.11)
        })
    })
})
