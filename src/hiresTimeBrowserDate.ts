import getElapsor, { Elapsor } from "./getElapsor"

export const hiresTimeBrowserDate = (): Elapsor => {
    const start = Date.now()
    return getElapsor(start, () => Date.now() - start)
}

export default hiresTimeBrowserDate