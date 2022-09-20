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

const hrTimeToMillis = (hrtime: [number, number]) => hrtime[0] * 1e3 + hrtime[1] / 1e6
const round = (number: number) => Number(number.toFixed(2))

const getElapsor = (startTime: number, getTime: () => number): Elapsor => {
  const elapsor = () => round(getTime())

  elapsor.startedAt = () => startTime
  elapsor.seconds = elapsor.s = () => round(getTime() / 1e3)
  elapsor.milliseconds = elapsor.ms = () => round(getTime())
  elapsor.microseconds = elapsor.us = () => round(getTime() * 1e3)
  elapsor.nanoseconds = elapsor.ns = () => round(getTime() * 1e6)

  return elapsor;
}

export const hiresTimeBrowserDate = (): Elapsor => {
  const start = Date.now()
  return getElapsor(start, () => Date.now() - start)
}

export const hiresTimeBrowserPerformance = (): Elapsor => {
  const start = window.performance.now()
  return getElapsor(start, () => window.performance.now() - start)
}

export const hirestimeNode = (): Elapsor => {
  const start = process.hrtime()
  return getElapsor(hrTimeToMillis(start), () => hrTimeToMillis(process.hrtime(start)))
}

const isRunningInNode = () => typeof process !== "undefined" && process.hrtime
const isRunningInBrowser = () => typeof window !== "undefined" && window.performance

const hirestime = isRunningInNode() ? hirestimeNode :
    isRunningInBrowser() ? hiresTimeBrowserPerformance :
        hiresTimeBrowserDate

export default hirestime
