import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Department, HttpClientService } from 'src/app/service/http-client-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
  animations: [routerTransition()]
})
export class AddDepartmentComponent implements OnInit {

  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  dept: Department = new Department(0, '');
  department: Department[];
  registerForm: FormGroup;
  hide = true;
  closeResult: string;

  dept_id:number
  deptname:string

  constructor(private httpClientService: HttpClientService,
    private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.httpClientService.getDept().subscribe(
      response => this.handlesuccessfulResponse(response));

    this.registerForm = this.formBuilder.group({
      'deptname': [this.dept.deptname, [
        Validators.required
      ]]
    });
  }

  getDep(department:Department){
    this.httpClientService.getDep(department).subscribe(
        data=>{this.department=this.department.filter(a=>a !== department)
            this.dept_id=data.dept_id
            this.deptname=data.deptname
          //  console.log(this.email)
      //  ,response=>this.handlesuccessfulResponse(response)
        });
}

updateDept(){
    this.dept.dept_id=this.dept_id
    this.dept.deptname=this.deptname
    
    this.httpClientService.updateDepartment(this.dept).subscribe(
      data=>{
        console.log('updated successfully...'+this.dept+' >'+data)
      }
                    
    )
    
  }

  handlesuccessfulResponse(response) {
    // this.employees=response;
    this.department = response;
  }

  createDept() {
    this.httpClientService.createDept(this.dept).subscribe(
      data => { console.log('Department created successfully...') }
    )

    //   this.httpClientService.sendMail()
  }

  deleteDept(department:Department){
    if(confirm('Are you sure you want to delete this department?')) {
  this.httpClientService.deleteDepartment(department).subscribe(
    data=>{this.department=this.department.filter(a=>a !== department)
    });
}else{}
  
}

  onRegisterSubmit() {
    alert("Department created");
    window.location.reload();
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}

open(content) {
  
    this.modalService.open(content, {ariaLabelledBy: 'edit-department-title'}).result.then((result) => {
      if(confirm('Are you sure you want to edit this department?')) {
      this.updateDept()
      this.closeResult = `Closed with: ${result}`;
      alert("Department edited");
      window.location.replace("/addDepartment");
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
