# hirestime [![Build Status](https://api.travis-ci.org/seriousManual/hirestime.png)](https://travis-ci.org/seriousManual/hirestime)

`hirestime` is a thin wrapper around the common time measuring APIs (node and the browser).
Uses `process.hrtime()` on node, the [performance API](https://developer.mozilla.org/de/docs/Web/API/Performance/now) in the browser and falls back to `Date` if neither is available.

## Installation

````bash
npm install hirestime
````

## hirestime()
returns a function:

### returnedFunction([unit])
Returns the elapsed time since the call of `hirestime` in milliseconds.    
An optional unit parameter can be specified that will modify the unit in which the elapsed time will be calculated.    

#### Possible Parameters

* `hirestime.S` elapsed time in seconds
* `hirestime.MS` elapsed time in milliseconds
* `hirestime.NS` elapsed time in nanoseconds

## Examples

By default the time is measured in milliseconds:
````javascript
const hirestime = require('hirestime')

//startpoint of the time measurement
const getElapsed = hirestime()

setTimeout(_ => {
    //returns the elapsed milliseconds
    console.log(getElapsed())
}, 1000)
````
 
Optionally the unit can be set to be seconds or nanoseconds:
 ````javascript
const hirestime = require('hirestime')

//startpoint of the time measurement
const getElapsed = hirestime()

setTimeout(_ => {
    //returns the elapsed seconds
    console.log(getElapsed(hirestime.S))
}, 1000)
````
 
