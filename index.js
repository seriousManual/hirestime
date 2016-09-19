var S = 's'
var MS = 'ms'
var NS = 'ns'

var round = number => Math.round(number * 100) / 100

function hirestimeNode() {
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

function hiresTimeBrowser() {
    var start = Date.now()

    return unit => {
        var elapsed = Date.now() - start

        if (!unit) unit = MS

        switch (unit) {
            case S:
                return round(elapsed / 1e3)

            case NS:
                return round(elapsed * 1e6)
        }

        return elapsed
    }
}

module.exports = function() {
    if (process.hrtime) {
        return hirestimeNode()
    } else {
        return hiresTimeBrowser()
    }
}

module.exports.S = S
module.exports.MS = MS
module.exports.NS = NS