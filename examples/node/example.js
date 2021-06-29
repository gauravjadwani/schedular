
const Schedular = require('./schedular.js')


function mycallback(param){
    console.log("Do this task in "+param[0])
}
console.log(Schedular)
const sc = new Schedular()
const schedule1 = sc.shedule(mycallback, ["who"], 5000)
// sc.delete(schedule1)
const schedule2 = sc.shedule(mycallback, ["Is"], 6000)
sc.showSchedule()