import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Trainings, Employee, TrainingRoom, HttpClientService } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-trainings',
    templateUrl: './trainings.component.html',
    styleUrls: ['./trainings.component.scss'],
    animations: [routerTransition()]
})
export class TrainingsComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
    employees:Employee[];
  trainings:Trainings[];
  training:Trainings=new Trainings(0,'','','',0,0);
  trainingRoom:TrainingRoom[];
  closeResult: string;
    
    startDate:string;
    endDate:string;
    trainingDesc:string;
    resquestId:number;
    constructor(private httpClientService:HttpClientService, 
      private modalService: NgbModal, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getTrainingEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
          this.httpClientService.getTrainings().subscribe(
            response=>this.handlesuccessfulResponse(response),);
         
          }
        }

        getTraining(training:Trainings){
          this.httpClientService.getTraining(training).subscribe(
              data=>{this.trainings=this.trainings.filter(a=>a !== training)
                  this.startDate=data.startDate
                  this.endDate=data.endDate
                  this.trainingDesc=data.trainingDesc
                  this.resquestId=data.requestId
                //  console.log(this.email)
            //  ,response=>this.handlesuccessfulResponse(response)
              });
      }
    
      updateTraining(){
          this.training.startDate=this.startDate
          this.training.endDate=this.endDate
          this.training.trainingDesc=this.trainingDesc
          this.training.requestId=this.resquestId
          
          this.httpClientService.updateTraining(this.training).subscribe(
            data=>{
              console.log('updated successfully...'+this.training+' >'+data)
            }
                          
          )
          
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

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
  
  open(content) {
  
    this.modalService.open(content, {ariaLabelledBy: 'edit-training-title'}).result.then((result) => {
      if(confirm('Are you sure you want to edit this training?')) {
      this.updateTraining()
      this.closeResult = `Closed with: ${result}`;
      alert("Training edited");
      window.location.replace("/trainings");
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
