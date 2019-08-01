import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Tasks, Employee, HttpClientService } from 'src/app/service/http-client-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
    animations: [routerTransition()]
})
export class AddTaskComponent implements OnInit {

    task:Tasks=new Tasks(null,'','','','','','');
    employees:Employee[];
    registerForm: FormGroup;
    hide = true;
   
    constructor(private httpClientService:HttpClientService, private formBuilder : FormBuilder) {}

    ngOnInit() {
        this.httpClientService.getEmps().subscribe(
            response=>{this.handlesuccessfulResponse(response)});
          
          this.registerForm = this.formBuilder.group({
            'startDate': [this.task.startDate, [
              Validators.required
            ]],
            'endDate': [this.task.endDate, [
              Validators.required
            ]],
            'taskName': [this.task.taskName, [
              Validators.required
            ]],
            'taskDesc': [this.task.taskDesc, [
              Validators.required
            ]],
            'assignedBy': [this.task.assignedBy, [
              Validators.required
            ]],
            'assignedTo': [this.task.assignedTo, [
              Validators.required
            ]]
          });
        }
      
        handlesuccessfulResponse(response){
          this.employees=response;
        }
        createTask(){
          this.httpClientService.createTask(this.task).subscribe(
            data=>{
              console.log('kek...'+this.task.assignedTo.toString())
              this.httpClientService.taskMail(this.task.assignedTo).subscribe(
                data=>{
                  console.log('sended successfully...'+data.assignedTo)
                }
              ),
              console.log('Task created successfully...')}
          )
        }
      
        onRegisterSubmit() {
          alert("Task registered");
          window.location.replace("/tasks");
        }
}
