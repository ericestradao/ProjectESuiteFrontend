import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService, Employee, Leaves } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-leaves',
    templateUrl: './leaves.component.html',
    styleUrls: ['./leaves.component.scss'],
    animations: [routerTransition()]
})
export class LeavesComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    employees:Employee[];
    
    leaves:Leaves[];
    leave:Leaves=new Leaves(0,'','','','',null,0);
    closeResult: string;
    startDate:string;
    endDate:string;
    reason:string;
    leaveType:string;
    leaveId:number;
    
    constructor(private httpClientService:HttpClientService, 
      private modalService: NgbModal, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getLeavesEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
            this.httpClientService.getLeaves().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          }
        
        }

        getLeave(leave:Leaves){
          this.httpClientService.getLeave(leave).subscribe(
              data=>{this.leaves=this.leaves.filter(a=>a !== leave)
                  this.startDate=data.startDate
                  this.endDate=data.endDate
                  this.reason=data.reason
                  this.leaveType=data.leaveType
                  this.leaveId=data.leaveId
                //  console.log(this.email)
            //  ,response=>this.handlesuccessfulResponse(response)
              });
      }
    
      updateLeave(){
          this.leave.startDate=this.startDate
          this.leave.endDate=this.endDate
          this.leave.reason=this.reason
          this.leave.leaveType=this.leaveType
          this.leave.leaveId=this.leaveId
          
          this.httpClientService.updateLeave(this.leave).subscribe(
            data=>{
              console.log('updated successfully...'+this.leave+' >'+data)
            }
                          
          )
          
        }
        handlesuccessfulResponse(response){
          this.employees=response;
          this.leaves=response;
      }
      
      deleteLeaves(leave:Leaves){
        if(confirm('Are you sure you want to delete this leave request?')) {
          this.httpClientService.deleteLeaves(leave).subscribe(
            data=>{this.leaves=this.leaves.filter(a=>a !== leave)}); 
      } else {}
        
      }

      approveLeaves(leave:Leaves){
          if (confirm('Are you sure you want to approve this leave request?')) {
            this.httpClientService.approveLeaves(leave).subscribe(
              data=>{this.leaves=this.leaves.filter(a=>a !== leave)}); 
              window.location.reload();
        } else {}
      }
      denyLeaves(leave:Leaves){
        if(confirm('Are you sure you want to deny this leave request?')) {
          this.httpClientService.denyLeaves(leave).subscribe(
            data=>{this.leaves=this.leaves.filter(a=>a !== leave)}); 
            window.location.reload();
      } else {}
}
public closeAlert(alert: any) {
  const index: number = this.alerts.indexOf(alert);
  this.alerts.splice(index, 1);
}

open(content) {

  this.modalService.open(content, {ariaLabelledBy: 'edit-leave-title'}).result.then((result) => {
    if(confirm('Are you sure you want to edit this request?')) {
    this.updateLeave()
    this.closeResult = `Closed with: ${result}`;
    alert("Request edited");
    window.location.replace("/leaves");
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
