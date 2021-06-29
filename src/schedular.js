// class Schedular{
//     constructor(){
//       this.schedularIds={}
//     }
//     shedule(callBackfunction, params, time){
//       console.log("Heygr I am scheduled")
//       const scheduleId = setTimeout(function(){
//         // callBackfunction.call(this,params)
//         console.log("params",params)
//         callBackfunction.apply(this,params)
//       },time)

//       this.schedularIds[scheduleId] = scheduleId
//       console.log("schedule",this.schedularIds)
//       return scheduleId
//     }
//     delete(id=''){
//       if(id){
//         clearTimeout(id)
//         delete this.schedularIds[id]
//       }else{
//         throw Error("Id not defined")
//       }
      
//     }
//     showSchedule(){
//       return this.schedularIds
//     }
//   }
  

// module.exports = Schedular