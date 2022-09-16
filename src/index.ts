import hiresTimeBrowserPerformance from "./hiresTimeBrowserPerformance"
import hirestimeNode from "./hiresTimeNode"
import hiresTimeBrowserDate from "./hiresTimeBrowserDate"

const isRunningInNode = () => typeof process !== "undefined" && process.hrtime
const isRunningInBrowser = () => typeof window !== "undefined" && window.performance

const hirestime = isRunningInNode() ? hirestimeNode :
    isRunningInBrowser() ? hiresTimeBrowserPerformance :
        hiresTimeBrowserDate

export default hirestime
