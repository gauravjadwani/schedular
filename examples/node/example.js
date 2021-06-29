
const Schedular = require('./schedular.js')


function mycallback(name,cat){
    console.log(`Do this task with params name ${name} and cat ${cat}`)
    console.log(this)
}
console.log(Schedular)
const sc = new Schedular()
const schedule1 = sc.shedule(mycallback, ["First Task","23k"], 5000)
sc.delete(schedule1)
const schedule2 = sc.shedule(mycallback, ["Second Task"], 6000)
sc.showSchedule(schedule2)