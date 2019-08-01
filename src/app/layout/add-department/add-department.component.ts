import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Department, HttpClientService } from 'src/app/service/http-client-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-department',
    templateUrl: './add-department.component.html',
    styleUrls: ['./add-department.component.scss'],
    animations: [routerTransition()]
})
export class AddDepartmentComponent implements OnInit {

    dept:Department=new Department(0,'');
  department:Department[];
  registerForm: FormGroup;
    hide = true;

    constructor(private httpClientService:HttpClientService, private formBuilder : FormBuilder) {}

    ngOnInit() {
        this.httpClientService.getDept().subscribe(
            response=>this.handlesuccessfulResponse(response),);
        
            this.registerForm = this.formBuilder.group({
              'deptname': [this.dept.deptname, [
                Validators.required
              ]]
            });
          }

        
      
        handlesuccessfulResponse(response){
          // this.employees=response;
           this.department=response;
        }
      
        createDept(){
          this.httpClientService.createDept(this.dept).subscribe(
            data=>{console.log('Department created successfully...')}
          )

       //   this.httpClientService.sendMail()
        }
      
        onRegisterSubmit() {
          alert("Department created");
          window.location.reload();
        }
      
}
