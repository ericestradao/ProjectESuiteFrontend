import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Department, Employee, HttpClientService } from '../service/http-client-service.service';
import { routerTransition } from '../router.animations';
import { RegistrationValidator } from '../shared/register.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()]
})
export class RegisterComponent implements OnInit {

  department:Department[];
  emp:Employee=new Employee(0,'','','','',0);
  registerForm: FormGroup;
  passwordForm: FormGroup;
  hide = true;
  userTemp:string;
  
  constructor(private httpClientService:HttpClientService, private formBuilder : FormBuilder) { }

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
      this.department=response;
  }
  createEmp(){
    this.httpClientService.createEmp(this.emp).subscribe(
      data=>{
        this.userTemp=data.emailid
        sessionStorage.setItem("userTemp", data.emailid)
        this.httpClientService.sendMailRegister(data.emailid.toString()).subscribe(
          data=>{
            console.log('sended successfully...')
          }
        )
        }
        
    )
    

    
  }

  onRegisterSubmit() {
    alert("Registered successfully");
    window.location.replace("/login");
  }


}
