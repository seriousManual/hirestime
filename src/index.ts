const round = (number: number) => Number(number.toFixed(2))

export interface Elapsor {
    startedAt: () => number;
    (): number
    seconds(): number
    s(): number
    milliseconds(): number
    ms(): number
    microseconds(): number
    us(): number
    nanoseconds(): number
    ns(): number
}

const getElapsor = (startTime: number, getTime: () => number): Elapsor => {
    const elapsor = () => round(getTime())
    elapsor.startedAt = () => startTime
    elapsor.seconds = () => round(getTime() / 1e3)
    elapsor.s = elapsor.seconds;
    elapsor.milliseconds = () => round(getTime())
    elapsor.ms = elapsor.milliseconds
    elapsor.microseconds = () => round(getTime() * 1e3)
    elapsor.us = elapsor.microseconds
    elapsor.nanoseconds = () => round(getTime() * 1e6)
    elapsor.ns = elapsor.nanoseconds
    return elapsor;
}

const hrTimeToMillis = (hrtime: [ number, number ]) => hrtime[0] * 1e3 + hrtime[1] / 1e6

export const hirestimeNode = (): Elapsor => {
    const start = process.hrtime()
    return getElapsor(hrTimeToMillis(start), () => hrTimeToMillis(process.hrtime(start)))
}

export const hiresTimeBrowserPerformance = (): Elapsor => {
    const start = window.performance.now()
    return getElapsor(start, () => window.performance.now() - start)
}

export const hiresTimeBrowserDate = (): Elapsor => {
    const start = Date.now()
    return getElapsor(start, () => Date.now() - start)
}

const isRunningInNode = () => typeof process !== "undefined" && process.hrtime
const isRunningInBrowser = () => typeof window !== "undefined" && window.performance

const hirestime = isRunningInNode() ? hirestimeNode :
                        isRunningInBrowser() ? hiresTimeBrowserPerformance :
                        hiresTimeBrowserDate

export default hirestime
