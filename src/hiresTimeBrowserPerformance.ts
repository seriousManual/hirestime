import getElapsor, { Elapsor } from "./getElapsor"

export const hiresTimeBrowserPerformance = (): Elapsor => {
  const start = window.performance.now()
  return getElapsor(start, () => window.performance.now() - start)
}

export default hiresTimeBrowserPerformance