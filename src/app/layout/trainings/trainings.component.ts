import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Trainings, Employee, TrainingRoom, HttpClientService } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-trainings',
    templateUrl: './trainings.component.html',
    styleUrls: ['./trainings.component.scss'],
    animations: [routerTransition()]
})
export class TrainingsComponent implements OnInit {

    employees:Employee[];
  trainings:Trainings[];
  trainingRoom:TrainingRoom[];
  
    constructor(private httpClientService:HttpClientService, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getTrainingEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
          this.httpClientService.getTrainings().subscribe(
            response=>this.handlesuccessfulResponse(response),);
         
          }
        }
          handlesuccessfulResponse(response){
            this.employees=response;
            this.trainings=response;
            this.trainingRoom=response;
        }
      
        deleteTrainings(training:Trainings){
          if(confirm('Are you sure you want to delete this training request?')) {
            this.httpClientService.deleteTrainings(training).subscribe(
              data=>{this.trainings=this.trainings.filter(a=>a !== training)}); 
        } else {}
          
        }
  
        approveTrainings(training:Trainings){
            if (confirm('Are you sure you want to approve this training request?')) {
              this.httpClientService.approveTrainings(training).subscribe(
                data=>{this.trainings=this.trainings.filter(a=>a !== training)}); 
                window.location.reload();
          } else {}
        }
        denyTrainings(training:Trainings){
          if(confirm('Are you sure you want to deny this training request?')) {
            this.httpClientService.denyTrainings(training).subscribe(
              data=>{this.trainings=this.trainings.filter(a=>a !== training)}); 
              window.location.reload();
        } else {}
  }
}
