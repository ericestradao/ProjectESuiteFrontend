import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Department{
  constructor(public dept_id:number, public deptname:string){}
}

export class Employee{
  constructor(public empid:number, public f_name:string,public l_name:string,
    public emailid:string, public password: string, public contacno:number){}
}

export class Tasks{
  //assignedTo;
  //assignedBy;
  constructor(public taskId:number, public taskName:string,public taskDesc:string,
    public startDate:string, public endDate:string,public assignedBy:string, public assignedTo:string ){}

    //public assignedBy:number, public assignedTo:number
}

export class Leaves{
  constructor(public leaveId:number, public leaveType:string,public startDate:string, public endDate:string,
    public reason:string, public status:boolean, public empid:number){}
}

export class Meetings{
  constructor(public requestId:number, public startTime:string,public endTime:string, public meetingDesc:string,
    public roomId:number, public empid:number){}
}

export class MeetingRoom{
  constructor(public roomId:number, public meetingRoomName:string,public capacity:number, public floor:number){}
}

export class Trainings{
  constructor(public requestId:number, public startDate:string, public endDate:string, public trainingDesc:string
    , public empid:number, public roomId:number){}
}

export class TrainingRoom{
  constructor(public roomId:number, public roomName:string,public roomCapacity:number, public floorNb:number,
    public isProjector:boolean, public isWhiteboard:boolean){}
}

export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  //ID
  public getID():Observable<Employee>{
    return this.httpClient.get<Employee>('http://localhost:8080/Admin/employee/'+sessionStorage.getItem('username'))
  }

  //MAIL
  public sendMail(){
    this.httpClient.get('http://localhost:8080/Admin/testing/'+sessionStorage.getItem('username')+
    '/bro/hello%20there')
    .subscribe((res)=>{
      console.log(res);});
    //this.httpClient.get('http://localhost:8080/Admin/testing/ericmohawk182@gmail.com/hello/hello there')
  }
  public sendMailRegister(employee){
    return this.httpClient.post<any>('http://localhost:8080/Admin/testing/'+employee+
    '/welcome%20on%20board!'+
    '/Welcome%20to%20ESute%20Corp', {"empid": employee.empid,
    "f_name": employee.f_name,
    "l_name": employee.l_name,
    "emailid": employee.emailid,
    "password": employee.password,
    "contacno": employee.contacno})
    //this.httpClient.get('http://localhost:8080/Admin/testing/ericmohawk182@gmail.com/hello/hello there')
  }
  //ADMIN

  public getEmps(){
    return this.httpClient.get<Employee>('http://localhost:8080/Admin/employees')
  }

  public getUser(employee){
    return this.httpClient.get<Employee>('http://localhost:8080/Admin/employee/'+employee)
  }
  public getLeave(leave){
    return this.httpClient.get<Leaves>('http://localhost:8080/Admin/leaveRequest/'+leave)
  }
  public getTask(task){
    return this.httpClient.get<Tasks>('http://localhost:8080/Admin/task/'+task)
  }
  public getMeeting(meeting){
    return this.httpClient.get<Meetings>('http://localhost:8080/Admin/meeting/'+meeting)
  }
  public getTraining(training){
    return this.httpClient.get<Trainings>('http://localhost:8080/Admin/training/'+training)
  }
  public getDep(department){
    return this.httpClient.get<Department>('http://localhost:8080/Admin/department/'+department)
  }
  public getMRoom(meetingRoom){
    return this.httpClient.get<MeetingRoom>('http://localhost:8080/Admin/meetingRoom/'+meetingRoom)
  }
  public getTRoom(trainingRoom){
    return this.httpClient.get<TrainingRoom>('http://localhost:8080/Admin/trainingRoom/'+trainingRoom)
  }

  public updateEmp(employee){
    return this.httpClient.put<Employee>('http://localhost:8080/Admin/updateEmployee/'+employee.empid,
    {"f_name": employee.f_name,
    "l_name": employee.l_name,
    "emailid": employee.emailid,
    "contacno": employee.contacno})
  }
  public updateTask(task){
    return this.httpClient.put<Tasks>('http://localhost:8080/Admin/updateTask/'+task.taskId,
    {"taskName":task.taskName,"taskDesc":task.taskDesc,"startDate":task.startDate,"endDate":task.endDate})
  }
  public updateLeave(leave){
    return this.httpClient.put<Leaves>('http://localhost:8080/Admin/updateRequest/'+leave.leaveId,
    {"reason":leave.reason,"leaveType":leave.leaveType,"startDate":leave.startDate,"endDate":leave.endDate})
  }
  public updateMeeting(meeting){
    return this.httpClient.put<Meetings>('http://localhost:8080/Admin/updateMeeting/'+meeting.requestId,
    {"meetingDesc":meeting.meetingDesc,"startTime":meeting.startTime,"endTime":meeting.endTime})
  } 
  public updateTraining(training){
    return this.httpClient.put<Trainings>('http://localhost:8080/Admin/updateTraining/'+training.requestId,
    {"trainingDesc":training.trainingDesc,"startDate":training.startDate,"endDate":training.endDate})
  }
  public updateDepartment(department){
    return this.httpClient.put<Trainings>('http://localhost:8080/Admin/updateDepartment/'+department.dept_id,
    {"dept_id":department.dept_id,"deptname":department.deptname})
  }
  public updateMRoom(meetingRoom){
    return this.httpClient.put<MeetingRoom>('http://localhost:8080/Admin/updateMeetingRoom/'+meetingRoom.roomId,
    {"capacity":meetingRoom.capacity,"meetingRoomName":meetingRoom.meetingRoomName,"floor":meetingRoom.floor})
  }
  public updateTRoom(trainingRoom){
    return this.httpClient.put<TrainingRoom>('http://localhost:8080/Admin/updateTrainingRoom/'+trainingRoom.roomId,
    {"roomCapacity":trainingRoom.roomCapacity,"roomName":trainingRoom.roomName,"floorNb":trainingRoom.floorNb})
  }

  public getDept(){
    return this.httpClient.get<Department[]>('http://localhost:8080/Admin/departments')
  }

  public getTasks(){
    return this.httpClient.get<Tasks[]>('http://localhost:8080/Admin/tasks')
  }

  public getLeaves(){
    return this.httpClient.get<Leaves[]>('http://localhost:8080/Admin/leaveRequests')
  }

  public getMeetings(){
    return this.httpClient.get<Meetings[]>('http://localhost:8080/Admin/meetings')
  }

  public getMeetingRoom(){
    return this.httpClient.get<MeetingRoom[]>('http://localhost:8080/Admin/meetingRooms')
  }

  public getTrainings(){
    return this.httpClient.get<Trainings[]>('http://localhost:8080/Admin/trainings')
  }

  public getTrainingRoom(){
    return this.httpClient.get<TrainingRoom[]>('http://localhost:8080/Admin/trainingRooms')
  }

  public createEmp(employee){
    return this.httpClient.post<Employee>('http://localhost:8080/register/'+employee.deptname,employee)
  } 

  public createDept(department){
    return this.httpClient.post<Department>('http://localhost:8080/Admin/newDepartment/',department)
  }

  public createMeetingRoom(meetingRoom){
    return this.httpClient.post<MeetingRoom>('http://localhost:8080/Admin/newMeetingRoom/',meetingRoom)
  }

  public createTrainingRoom(trainingRoom){
    return this.httpClient.post<TrainingRoom>('http://localhost:8080/Admin/newTrainingRoom/',trainingRoom)
  }
  
  public createTask(tasks){
    //console.log(typeof tasks.assignedBy)
  return this.httpClient.post<Tasks>('http://localhost:8080/Admin/newTask/'+tasks.assignedBy+'/'+tasks.assignedTo.empid,
  {"taskName":tasks.taskName,"taskDesc":tasks.taskDesc,"startDate":tasks.startDate,"endDate":tasks.endDate})
  }

  public createLeave(leaves){
    return this.httpClient.post<Leaves>('http://localhost:8080/Admin/newRequest/'+leaves.empid.empid,
    {"reason":leaves.reason,"leaveType":leaves.leaveType,"startDate":leaves.startDate,"endDate":leaves.endDate})
  } 

  public createMeeting(meetings){
    return this.httpClient.post<Meetings>('http://localhost:8080/Admin/newMeeting/'+meetings.empid.empid+'/'+meetings.roomId,
    {"meetingDesc":meetings.meetingDesc,"startTime":meetings.startTime,"endTime":meetings.endTime})
  }

  public createTraining(trainings){
    return this.httpClient.post<Trainings>('http://localhost:8080/Admin/newTraining/'+trainings.empid.empid+'/'+trainings.roomId,
    {"trainingDesc":trainings.trainingDesc,"startDate":trainings.startDate,"endDate":trainings.endDate})
  }

  public deleteEmp(employee){
    return this.httpClient.delete<Employee>('http://localhost:8080/Admin/employee/'+employee.empid)
  }

  public deleteTasks(tasks){
    return this.httpClient.delete<Tasks>('http://localhost:8080/Admin/task/'+tasks.taskId)
  }

  public deleteLeaves(leave){
    return this.httpClient.delete<Leaves>('http://localhost:8080/Admin/leaveRequest/'+leave.leaveId)
  }

  public deleteMeetings(meeting){
    return this.httpClient.delete<Meetings>('http://localhost:8080/Admin/meeting/'+meeting.requestId)
  }

  public deleteTrainings(training){
    return this.httpClient.delete<Trainings>('http://localhost:8080/Admin/training/'+training.requestId)
  }

  public deleteDepartment(department){
    return this.httpClient.delete<Department>('http://localhost:8080/Admin/department/'+department.dept_id)
  }

  public deleteMRoom(meetingRoom){
    return this.httpClient.delete<MeetingRoom>('http://localhost:8080/Admin/meetingRoom/'+meetingRoom.roomId)
  }

  public deleteTRoom(trainingRoom){
    return this.httpClient.delete<TrainingRoom>('http://localhost:8080/Admin/trainingRoom/'+trainingRoom.roomId)
  }



  //EMPLOYEE
  public getEmp(){
    return this.httpClient.get<Employee[]>('http://localhost:8080/Employee/employee/'+parseInt(sessionStorage.getItem("id")))
  }

  public getLeavesEmp(){
    return this.httpClient.get<Leaves[]>('http://localhost:8080/Employee/leaveRequest/'+parseInt(sessionStorage.getItem("id")))
  }

  public getTrainingEmp(){
    return this.httpClient.get<Trainings[]>('http://localhost:8080/Employee/training/'+parseInt(sessionStorage.getItem("id")))
  }

  public getMeetingEmp(){
    return this.httpClient.get<Meetings[]>('http://localhost:8080/Employee/meeting/'+parseInt(sessionStorage.getItem("id")))
  }

  public getTaskEmp(){
    return this.httpClient.get<Tasks[]>('http://localhost:8080/Employee/task/'+parseInt(sessionStorage.getItem("id")))
  }

  public createLeaveEmp(leaves){
    return this.httpClient.post<Leaves>('http://localhost:8080/Admin/newRequest/'+parseInt(sessionStorage.getItem("id")),
    {"reason":leaves.reason,"leaveType":leaves.leaveType,"startDate":leaves.startDate,"endDate":leaves.endDate})
  } 

  public createMeetingEmp(meetings){
    return this.httpClient.post<Meetings>('http://localhost:8080/Admin/newMeeting/'+parseInt(sessionStorage.getItem("id"))
    +'/'+meetings.roomId, {"meetingDesc":meetings.meetingDesc,"startTime":meetings.startTime,"endTime":meetings.endTime})
  }

  public createTrainingEmp(trainings){
    return this.httpClient.post<Trainings>('http://localhost:8080/Admin/newTraining/'+parseInt(sessionStorage.getItem("id"))
    +'/'+trainings.roomId,{"trainingDesc":trainings.trainingDesc,"startDate":trainings.startDate,"endDate":trainings.endDate})
  }

  public approveLeaves(leave){
    return this.httpClient.put<Leaves>('http://localhost:8080/Admin/approveRequest/'+leave.leaveId+'/yes',{ })
  }
  public denyLeaves(leave){
    return this.httpClient.put<Leaves>('http://localhost:8080/Admin/approveRequest/'+leave.leaveId+'/no',{ })
  }

  public approveMeetings(meeting){
    return this.httpClient.put<Leaves>('http://localhost:8080/Admin/approveMeeting/'+meeting.requestId+'/yes',{ })
  }
  public denyMeetings(meeting){
    return this.httpClient.put<Leaves>('http://localhost:8080/Admin/approveMeeting/'+meeting.requestId+'/no',{ })
  }

  public approveTrainings(training){
    return this.httpClient.put<Leaves>('http://localhost:8080/Admin/approveTraining/'+training.requestId+'/yes',{ })
  }
  public denyTrainings(training){
    return this.httpClient.put<Leaves>('http://localhost:8080/Admin/approveTraining/'+training.requestId+'/no',{ })
  }

  public taskMail(tasks){
    return this.httpClient.post<Tasks>('http://localhost:8080/Admin/testing/'+tasks.emailid+
    '/ESuite-New%20Task'+
    '/A%20new%20task%20as%20been%20assigned%20to%20you,%20click%20the%20next%20link%20to%20see%20it:http://localhost:4200/', 
    {"taskName":tasks.taskName,"taskDesc":tasks.taskDesc,"startDate":tasks.startDate,"endDate":tasks.endDate})
    //this.httpClient.get('http://localhost:8080/Admin/testing/ericmohawk182@gmail.com/hello/hello there')
  }

  public leaveMail(leaves){
    return this.httpClient.post<Leaves>('http://localhost:8080/Admin/testing/'+leaves.emailid+
    '/ESuite%20Leave%20Request'+
    '/Your%20leave%20request%20has%20been%20created,%20needs%20an%20administrator%20approval', 
    {"reason":leaves.reason,"leaveType":leaves.leaveType,"startDate":leaves.startDate,"endDate":leaves.endDate})
  }
  public leaveMailEmp(){
    return this.httpClient.get('http://localhost:8080/Admin/testing/'+sessionStorage.getItem("username")+
    '/ESuite%20Leave%20Request'+
    '/Your%20leave%20request%20has%20been%20created,%20needs%20an%20administrator%20approval')
  }

  public meetingMail(meetings){
    return this.httpClient.post<Meetings>('http://localhost:8080/Admin/testing/'+meetings.emailid+
    '/ESuite%20Meeting%20Request'+
    '/Your%20meeting%20request%20has%20been%20created,%20needs%20an%20administrator%20approval', 
    {"meetingDesc":meetings.meetingDesc,"startTime":meetings.startTime,"endTime":meetings.endTime})
  }
  public meetingMailEmp(){
    return this.httpClient.get('http://localhost:8080/Admin/testing/'+sessionStorage.getItem("username")+
    '/ESuite%20Meeting%20Request'+
    '/Your%20meeting%20request%20has%20been%20created,%20needs%20an%20administrator%20approval')
  }

  public trainingMail(trainings){
    return this.httpClient.post<Trainings>('http://localhost:8080/Admin/testing/'+trainings.emailid+
    '/ESuite%20Training%20Request'+
    '/Your%20training%20request%20has%20been%20created,%20needs%20an%20administrator%20approval',
    {"trainingDesc":trainings.trainingDesc,"startDate":trainings.startDate,"endDate":trainings.endDate})
  
  }
  public trainingMailEmp(){
    return this.httpClient.get('http://localhost:8080/Admin/testing/'+sessionStorage.getItem("username")+
    '/ESuite%20Training%20Request'+
    '/Your%20training%20request%20has%20been%20created,%20needs%20an%20administrator%20approval')
  }

}
