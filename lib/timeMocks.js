function mockPerformance (msTime) {
    let isFirst = true
    let random = parseInt(Math.random() * 1000000, 10)

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

function hrtimeMock(msTime) {
    var _hrtime = process.hrtime;

    var returnValue = [
        parseInt(msTime / 1e3, 10),
        (msTime % 1000) * 1e6
    ];

    var isFirst = true;
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

module.exports = {
    mockPerformance,
    hrtimeMock
}