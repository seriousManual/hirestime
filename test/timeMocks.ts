
type HrTimeTuple = [ number, number ]

export const hrtimeMock = (duration: number) => {
    const realHrTime = process.hrtime
    let first = true
    const hrt = (startTime: HrTimeTuple): HrTimeTuple => {
        if (first) {
            first = false;
            return [ 0, 0 ];
        }
        process.hrtime = realHrTime
        return [ Math.round(duration / 1e3), (duration % 1000) * 1e6 ]
    }
    hrt.bigint = () => BigInt(0)
    process.hrtime = hrt
};

export const mockPerformance = (duration: number) => {
    let first = true;
    window.performance.now = () => {
        if (first) {
            first = false
            return 0
        }
        return duration;
    }
};
