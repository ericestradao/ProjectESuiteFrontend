import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService, Employee, Leaves } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-leaves',
    templateUrl: './leaves.component.html',
    styleUrls: ['./leaves.component.scss'],
    animations: [routerTransition()]
})
export class LeavesComponent implements OnInit {
    employees:Employee[];
    leaves:Leaves[];

    constructor(private httpClientService:HttpClientService, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getLeavesEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
            this.httpClientService.getLeaves().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          }
        
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
}
