import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Employee, Department, HttpClientService } from 'src/app/service/http-client-service.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RegistrationValidator } from '../../shared/register.validator';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss'],
    animations: [routerTransition()]
})
export class AddEmployeeComponent implements OnInit {
    // bar chart
    department:Department[];
    emp:Employee=new Employee(0,'','','','',0);
    registerForm: FormGroup;
    passwordForm: FormGroup;
    hide = true;

    constructor(private httpClientService:HttpClientService, private formBuilder : FormBuilder) {}

    ngOnInit() {
        this.httpClientService.getDept().subscribe(
            response=>this.handlesuccessfulResponse(response),);
          
            this.passwordForm = this.formBuilder.group({
              password: [this.emp.password, [Validators.required,
              Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
              confirmPassword: ['', Validators.required]
            }, {
              validator: RegistrationValidator.validate.bind(this)
            });

          this.registerForm = this.formBuilder.group({
            'f_name': [this.emp.f_name, [
              Validators.required
            ]],
            'l_name': [this.emp.l_name, [
              Validators.required,
            ]],
            'username': [this.emp.emailid, [
              Validators.required,
              Validators.email
            ]],
            'contacno': [this.emp.contacno, [
              Validators.minLength(10)
            ]],
            'deptname': ['', [
              Validators.required
            ]],
            passwordForm: this.passwordForm
          });
          }
      
          handlesuccessfulResponse(response){
           // this.employees=response;
            this.department=response;
        }
        createEmp(){
          this.httpClientService.createEmp(this.emp).subscribe(
            data=>{
              this.httpClientService.sendMailRegister(data.emailid.toString()).subscribe(
                data=>{
                  console.log('sended successfully...')
                }
              )
              }              
          )
          
        }
      
        onRegisterSubmit() {
          alert("Employee registered");
          window.location.replace("/employee");
        }
      
}
