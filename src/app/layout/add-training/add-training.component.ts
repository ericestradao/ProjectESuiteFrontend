import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Trainings, Employee, TrainingRoom, HttpClientService } from 'src/app/service/http-client-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-add-training',
    templateUrl: './add-training.component.html',
    styleUrls: ['./add-training.component.scss'],
    animations: [routerTransition()]
})
export class AddTrainingComponent implements OnInit {

    training:Trainings=new Trainings(0,'','','',0,0);
  trainingRoom:TrainingRoom[];
  employees:Employee[];
  registerForm: FormGroup;
  hide = true;
  
    constructor(private httpClientService:HttpClientService, private formBuilder : FormBuilder,
        private loginService:AuthenticationService) {}

    ngOnInit() {
        this.httpClientService.getEmps().subscribe(
            response=>this.handlesuccessfulResponseEmp(response),);
      
          this.httpClientService.getTrainingRoom().subscribe(
            response=>this.handlesuccessfulResponseRoom(response),);
      
          this.registerForm = this.formBuilder.group({
            'trainingDesc': [this.training.trainingDesc, [
              Validators.required
            ]],
            'startDate': [this.training.startDate, [
              Validators.required
            ]],
            'endDate': [this.training.endDate, [
              Validators.required
            ]],
            'roomId': ['', [
              Validators.required
            ]],
          });
        }
        handlesuccessfulResponseEmp(response){
          this.employees=response;
        }
      
        handlesuccessfulResponseRoom(response){
          this.trainingRoom=response;
        }
        createTraining(){
          if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.createTrainingEmp(this.training).subscribe(
              data=>{console.log('Training created successfully...')
              this.httpClientService.trainingMailEmp().subscribe(
                data=>{
                  console.log('sended successfully...')
                })
            }
            )
            } else{
          this.httpClientService.createTraining(this.training).subscribe(
            data=>{console.log('Training created successfully...')
            this.httpClientService.trainingMail(this.training.empid).subscribe(
              data=>{
                console.log('sended successfully...')
              })
          }
          )
        }
        }
        onRegisterSubmit() {
          alert("Training registered");
          window.location.replace("/trainings");
        }
    
}
