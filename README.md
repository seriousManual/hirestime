# hirestime [![Build Status](https://api.travis-ci.org/seriousManual/hirestime.png)](https://travis-ci.org/seriousManual/hirestime)

`hirestime` is a thin wrapper around the common time measuring APIs (node and the browser).
Uses `process.hrtime()` on node, the [performance API](https://developer.mozilla.org/de/docs/Web/API/Performance/now) in the browser and falls back to `Date` if neither is available.

## Installation

````bash
npm install hirestime
````

## hirestime()
returns a function:

### returnedFunction()
Returns the elapsed time since the call of `hirestime` in milliseconds.    

## Examples

By default the time is measured in milliseconds:
````javascript
import hirestime from 'hirestime'

//startpoint of the time measurement
const getElapsed = hirestime()

setTimeout(_ => {
    //returns the elapsed milliseconds
    console.log(getElapsed())
}, 1000)
````

Specify the unit:
 ````javascript
import hirestime from 'hirestime'

//startpoint of the time measurement
const getElapsed = hirestime()

setTimeout(_ => {
    //returns the elapsed seconds
    console.log(getElapsed.s())
    console.log(getElapsed.seconds())

    //returns the elapsed milliseconds
    console.log(getElapsed.ms())
    console.log(getElapsed.milliseconds())

    //returns the elapsed nanoseconds
    console.log(getElapsed.ns())
    console.log(getElapsed.nanoseconds())
}, 1000)
````