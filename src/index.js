class Schedular{
    constructor(){
      this.schedularIds={}
    }
    shedule(callBackfunction, params, time){
      console.log("Hey I am scheduled")
      const scheduleId = setTimeout(function(){
        console.log("params",params)
        callBackfunction.apply(this,params)
      },time)

      this.schedularIds[scheduleId] = scheduleId
      return this.schedularIds[scheduleId]
    }
    delete(id){
      if(id && this.schedularIds[id]){
        clearTimeout(id)
        delete this.schedularIds[id]
      }else{
        throw Error("Id not defined")
      }
      
    }
    showSchedule(id){
        if(id && this.schedularIds[id]){
            return this.schedularIds[id]
        }
    }
}
  

module.exports = Schedular