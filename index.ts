const round = (number: number) => Math.round(number * 100) / 100

function getElapsor(getTime) {
    const ret = () => round(getTime())

    ret.s = ret.seconds = () => round(getTime() / 1e3)
    ret.ms = ret.milliseconds = () => round(getTime())
    ret.ns = ret.nanoseconds = () => round(getTime() * 1e6)

    return ret
}

export function hirestimeNode() {
    const start = process.hrtime()

    return getElapsor(() => {
        let elapsed = process.hrtime(start)
        return elapsed[0] * 1e3 + elapsed[1] / 1e6
    })
}

export function hiresTimeBrowserPerformance() {
    const start = window.performance.now()
    return getElapsor(() => window.performance.now() - start)
}

export function hiresTimeBrowserDate() {
    const start = Date.now()
    return getElapsor(() => Date.now() - start)
}

let hirestime = hiresTimeBrowserDate
if (typeof process != "undefined" && process.hrtime) {
    hirestime = hirestimeNode
}

if (typeof window != "undefined" && window.performance) {
    hirestime = hiresTimeBrowserPerformance
}

export default hirestime