# hirestime [![Build Status](https://api.travis-ci.org/seriousManual/hirestime.png)](https://travis-ci.org/seriousmanual/hirestime)

[![NPM](https://nodei.co/npm/hirestime.png)](https://nodei.co/npm/hirestime/)

[![NPM](https://nodei.co/npm-dl/hirestime.png?months=12)](https://nodei.co/npm/hirestime/)

`hirestime` is a thin wrapper around `process.hrtime()` that does the clumsy handling of the returned array for you.    
Also works in the browser.

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
* `hirestime.MS` elapsed time in milliseoncds
* `hirestime.NS` elapsed time in nanoseconds

## Examples

By default the time is measured in milliseconds
````javascript
const hirestime = require('hirestime')

//startpoint of the time measurement
const getElapsed = hirestime()

setTimeout(_ => {
    //returns the elapsed milliseconds
    console.log(getElapsed())
}, 1000)
````
 
### Optionally the unit can be set to be seconds or nanoseconds
 ````javascript
const hirestime = require('hirestime')

//startpoint of the time measurement
const getElapsed = hirestime()

setTimeout(_ => {
    //returns the elapsed seconds
    console.log(getElapsed(hirestime.S))
}, 1000)
````
 
