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
  elapsor.seconds = elapsor.s = () => round(getTime() / 1e3)
  elapsor.milliseconds = elapsor.ms = () => round(getTime())
  elapsor.microseconds = elapsor.us = () => round(getTime() * 1e3)
  elapsor.nanoseconds = elapsor.ns = () => round(getTime() * 1e6)

  return elapsor;
}

export default getElapsor