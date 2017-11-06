'use strict'

const S = 's'
const MS = 'ms'
const NS = 'ns'

const round = number => Math.round(number * 100) / 100

function formatFromMs(value, unit) {
    if (!unit || unit === MS) {
        return round(value)
    }

    if (unit === S) {
        return round(value / 1e3)
    }

    return round(value * 1e6)
}

function hirestimeNode() {
    const start = process.hrtime()
    return unit => {
        let elapsed = process.hrtime(start)
        let value = elapsed[0] * 1e3 + elapsed[1] / 1e6

        return formatFromMs(value, unit);
    }
}

function hiresTimeBrowserPerformance() {
    const start = window.performance.now()
    return unit => formatFromMs(window.performance.now() - start, unit)
}

function hiresTimeBrowserDate() {
    const start = Date.now()
    return unit => formatFromMs(Date.now() - start, unit)
}

module.exports = (() => {
    if (typeof process != "undefined" && process.hrtime) {
        return hirestimeNode
    }

    if (typeof window != "undefined" && window.performance) {
        return hiresTimeBrowserPerformance
    }

    return hiresTimeBrowserDate
})()

module.exports.node = hirestimeNode
module.exports.browserDate = hiresTimeBrowserDate
module.exports.hiresTimeBrowserPerformance = hiresTimeBrowserPerformance

module.exports.S = S
module.exports.MS = MS
module.exports.NS = NS