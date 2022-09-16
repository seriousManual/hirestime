import getElapsor, { Elapsor } from "./getElapsor"

const hrTimeToMillis = (hrtime: [number, number]) => hrtime[0] * 1e3 + hrtime[1] / 1e6

export const hirestimeNode = (): Elapsor => {
    const start = process.hrtime()
    return getElapsor(hrTimeToMillis(start), () => hrTimeToMillis(process.hrtime(start)))
}

export default hirestimeNode