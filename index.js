var S = 's'
var MS = 'ms'
var NS = 'ns'

var round = number => Math.round(number * 100) / 100

function hirestime() {
    var start = process.hrtime()

    return unit => {
        var elapsed = process.hrtime(start)

        if (!unit) unit = MS

        switch (unit) {
            case S:
                return round(elapsed[0] + elapsed[1] / 1e9)

            case MS:
                return round(elapsed[0] * 1e3 + elapsed[1] / 1e6)

            case NS:
                return round(elapsed[0] * 1e9 + elapsed[1])
        }
    }
}

hirestime.S = S
hirestime.MS = MS
hirestime.NS = NS

module.exports = hirestime