export function mockPerformance (msTime) {
    let isFirst = true
    let random = Math.round(Math.random() * 1000000)

    // @ts-ignore
    global.window = {
        performance: {
            now: () => {
                if (isFirst) {
                    isFirst = false;

                    return random;
                } else {
                    isFirst = true;

                    return random + msTime;
                }
            }
        }
    }
}

export function hrtimeMock(msTime) {
    var _hrtime = process.hrtime;

    var returnValue = [
        Math.round(msTime / 1e3),
        (msTime % 1000) * 1e6
    ];

    var isFirst = true;

    // @ts-ignore
    process.hrtime = function() {
        if (isFirst) {
            isFirst = false;

            return [];
        } else {
            isFirst = true;
            process.hrtime = _hrtime;

            return returnValue;
        }
    }
}