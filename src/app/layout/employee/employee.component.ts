import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Employee, Department, HttpClientService } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    animations: [routerTransition()]
})
export class EmployeeComponent implements OnInit {

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    employees:Employee[]
    department:Department[];
    fname:any
    lname:any

    constructor(private httpClientService:HttpClientService,  private loginService:AuthenticationService) {
        
    }

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.fname = (sessionStorage.getItem("firstname"));
            this.lname = (sessionStorage.getItem("lastname"));
          } else{
          this.httpClientService.getEmps().subscribe(
            response=>this.handlesuccessfulResponse(response),);
         
          }
    
    }

    handlesuccessfulResponse(response){
        this.employees=response; 
        this.department=response;
    }
  

    deleteEmp(employee:Employee){
        if(confirm('Are you sure you want to delete this employee?')) {
      this.httpClientService.deleteEmp(employee).subscribe(
        data=>{this.employees=this.employees.filter(a=>a !== employee)
        });
    }else{}
      
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
