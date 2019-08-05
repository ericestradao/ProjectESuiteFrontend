import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Employee, Department, HttpClientService } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
    emp:Employee=new Employee(0,'','','','',0);
    department:Department[];
    fname:any
    lname:any
    closeResult: string;

    email:string
    f_name:string
    l_name:string
    contacno:number
    id:number
    
  //  dept:string

    constructor(private httpClientService:HttpClientService,
        private modalService: NgbModal, private loginService:AuthenticationService) {
        
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

    getUser(employee:Employee){
        this.httpClientService.getUser(employee).subscribe(
            data=>{this.employees=this.employees.filter(a=>a !== employee)
                this.email=data.emailid
                this.f_name=data.f_name
                this.l_name=data.l_name
                this.contacno=data.contacno
                this.id=data.empid
              //  console.log(this.email)
          //  ,response=>this.handlesuccessfulResponse(response)
            });
    }

    updateEmp(){
        this.emp.emailid=this.email
        this.emp.f_name=this.f_name
        this.emp.l_name=this.l_name
        this.emp.contacno=this.contacno
        this.emp.empid=this.id
        
        this.httpClientService.updateEmp(this.emp).subscribe(
          data=>{
            console.log('updated successfully...'+this.emp+' >'+data)
          }
                        
        )
        
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

    open(content) {
      
        this.modalService.open(content, {ariaLabelledBy: 'edit-employee-title'}).result.then((result) => {
          if(confirm('Are you sure you want to edit this employee?')) {
          this.updateEmp()
          this.closeResult = `Closed with: ${result}`;
          alert("Employee edited");
          window.location.replace("/employee");
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
