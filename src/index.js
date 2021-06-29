// module.exports = {
//     add: (num1, num2) => num1 + num2,
//     sub: (num1, num2) => num1 - num2,
//   };




class Schedular{
    constructor(){
      this.schedularIds={}
    }
    shedule(callBackfunction, params, time){
      console.log("Hey I am scheduled")
      const scheduleId = setTimeout(function(){
        // callBackfunction.call(this,params)
        callBackfunction.apply(this,params)
      },time)

      this.schedularIds[scheduleId] = scheduleId
      console.log("schedule",this.schedularIds)
      return scheduleId
    }
    delete(id=''){
      if(id){
        clearTimeout(id)
        delete this.schedularIds[id]
      }else{
        throw Error("Id not defined")
      }
      
    }
    showSchedule(){
      return this.schedularIds
    }
}
  

module.exports = Schedular
// export default Schedular
//   function mycallback(param){
//     console.log("Do this task in "+param[0])
//   }
//   const sc = new Schedular()
//   const schedule1 = sc.shedule(mycallback, ["who"], 5000)
//   // sc.delete(schedule1)
//   const schedule2 = sc.shedule(mycallback, ["Is"], 6000)
//   sc.showSchedule()