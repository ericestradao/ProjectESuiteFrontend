import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService, Tasks } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    animations: [routerTransition()]
})
export class TasksComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    tasks:Tasks[];
    task:Tasks=new Tasks(null,'','','','','','');
    closeResult: string;
    startDate:string;
    endDate:string;
    taskDesc:string;
    taskName:string;
    taskId:number;
    constructor(private httpClientService:HttpClientService, 
      private modalService: NgbModal, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getTaskEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
          this.httpClientService.getTasks().subscribe(
            response=>this.handlesuccessfulResponse(response),);
        }
    }

    getTask(task:Tasks){
      this.httpClientService.getTask(task).subscribe(
          data=>{this.tasks=this.tasks.filter(a=>a !== task)
              this.startDate=data.startDate
              this.endDate=data.endDate
              this.taskDesc=data.taskDesc
              this.taskName=data.taskDesc
              this.taskId=data.taskId
            //  console.log(this.email)
        //  ,response=>this.handlesuccessfulResponse(response)
          });
  }

  updateTask(){
      this.task.startDate=this.startDate
      this.task.endDate=this.endDate
      this.task.taskDesc=this.taskDesc
      this.task.taskId=this.taskId
      this.task.taskName=this.taskName
      
      this.httpClientService.updateTask(this.task).subscribe(
        data=>{
          console.log('updated successfully...'+this.task+' >'+data)
        }
                      
      )
      
    }
    handlesuccessfulResponse(response){
        this.tasks=response;
      }
    
      deleteTask(tasks:Tasks){
        if(confirm('Are you sure you want to delete this task?')) {
        this.httpClientService.deleteTasks(tasks).subscribe(
          data=>{this.tasks=this.tasks.filter(a=>a !== tasks)});
        
      }else{}
}

public closeAlert(alert: any) {
  const index: number = this.alerts.indexOf(alert);
  this.alerts.splice(index, 1);
}

open(content) {

  this.modalService.open(content, {ariaLabelledBy: 'edit-task-title'}).result.then((result) => {
    if(confirm('Are you sure you want to edit this task?')) {
    this.updateTask()
    this.closeResult = `Closed with: ${result}`;
    alert("Task edited");
    window.location.replace("/tasks");
  }else{

  }
  }, (reason) => {
    
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });

}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}