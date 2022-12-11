/* Your Code Here */
function createEmployeeRecord(employeeDetails){
    return {
        firstName: employeeDetails[0],
        familyName: employeeDetails[1],
        title: employeeDetails[2],
        payPerHour: employeeDetails[3],
        timeInEvents:[],
        timeOutEvents: []
    }
  }
  function createEmployeeRecords(employeesCard) {
    return employeesCard.map(function (employeeInfo) {
        return createEmployeeRecord(employeeInfo)
    });
  }
  function createTimeInEvent(timeIn) {
    //timeIn = "2000-11-23 1300"
    const [date, hour] = timeIn.split(' ');
    this.timeInEvents.push({
      
        type: "TimeIn",
        hour: parseInt(hour,10),
        date
    })
    return this;
  }
  function createTimeOutEvent(timeOut) {
  const [date, hour] = timeOut.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this;
  }
  function hoursWorkedOnDate(dateToBePaid) {
    let clockIn = this.timeInEvents.find((e) => e.date == dateToBePaid).hour
   let clockOut = this.timeOutEvents.find((e) => e.date == dateToBePaid).hour
   return (clockOut - clockIn)/100
   //13
  }
  // Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
  function wagesEarnedOnDate(dateOfTheForm){
    const payPerHour = parseInt(this.payPerHour)
    const hoursWorked = hoursWorkedOnDate.call(this, dateOfTheForm)
    return payPerHour * hoursWorked
}
  
function findEmployeeByFirstName(allEmployeeRecords,firstName){
    return allEmployeeRecords.find((event) =>{
        return event.firstName
 })
}

function calculatePayroll(allEmployeeRecords){
   return allEmployeeRecords.reduce((previousAmount,employee) => {
     return previousAmount + allWagesFor.call(employee)
   },0) 
}
  
  // Using wagesEarnedOnDate, accumulate the value of all dates worked by the employeeDetails in the record
//   let allWagesFor = (employeeRecord) => {
//    let employeeWages = []
//    let datesWorked = employeeRecord.timeInEvents.map((e) => e.date)
//    for (let date of datesWorked) {
//       employeeWages.push(wagesEarnedOnDate(employeeRecord, date))
//    }
//    return employeeWages.reduce((total, wage) => total + wage)
//   }
  // Using wagesEarnedOnDate, accumulate the value of all dates worked by the employeeDetails in the record
// // create a function that returns an object with the keys
// // firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents
// function createEmployeeRecord(array) {
//    return {firstName :array[0],
//     familyName :array[1],
//     title :array[2],
//     payPerHour :array[3],
//     timeInEvents :[],
//     timeOutEvents : []}
// }
// //takes an array of arrays as an argument
// //returns an array of objects created from 
// //the passed array and using the createEmployeeRecord fn
// function createEmployeeRecords(employeesCard) {
//     return employeesCard.map(function (employeeInfo) {
//         return createEmployeeRecord(employeeInfo)
//     });
//   }

//   function createTimeInEvent(employeeRecord, timeIn) {
//     //timeIn = "2000-11-23 1300"
//     const [day, hour] = timeIn.split(' ');
//     employeeRecord.timeInEvents.push({
//         type:"TimeIn",
//         hour: parseInt(hour,10),
//         date
//     })
//     return employeeRecord;
//   }

//   function createTimeOutEvent(employeeRecord, timeOut) {
//     const [date, hour] = timeOut.split(' ');
//       employeeRecord.timeOutEvents.push({
//           type: "TimeOut",
//           hour: parseInt(hour, 10),
//           date
//       })
//       return employeeRecord;
//   }
// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
