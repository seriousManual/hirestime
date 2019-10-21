'use strict'

const S = 's'
const MS = 'ms'
const NS = 'ns'

let DEP_WARNING = false

const round = number => Math.round(number * 100) / 100

function formatFromMs(value, unit = MS) {
    if (unit === MS) {
        return round(value)
    }

    if (unit === S) {
        return round(value / 1e3)
    }

    return round(value * 1e6)
}

function getElapsor(getTime) {
    const ret = unit => {
        if (unit && !DEP_WARNING) {
            console.log('hirestime: please note that specifying a unit is deprecated and will be removed in the future, use the named methods instead')
            DEP_WARNING = true
        }

        return formatFromMs(getTime(), unit);
    }

    ret.s = ret.seconds = () => formatFromMs(getTime(), S)
    ret.ms = ret.milliseconds = () => formatFromMs(getTime(), MS)
    ret.ns = ret.nanoseconds = () => formatFromMs(getTime(), NS)

    return ret
}

function hirestimeNode() {
    const start = process.hrtime()

    return getElapsor(() => {
        let elapsed = process.hrtime(start)
        return elapsed[0] * 1e3 + elapsed[1] / 1e6
    });
}

function hiresTimeBrowserPerformance() {
    const start = window.performance.now()
    return getElapsor(() => window.performance.now() - start)
}

function hiresTimeBrowserDate() {
    const start = Date.now()
    return getElapsor(() => Date.now() - start)
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