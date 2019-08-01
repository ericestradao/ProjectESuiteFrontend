import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { HttpClientService, Leaves, Employee } from 'src/app/service/http-client-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-leave',
    templateUrl: './add-leave.component.html',
    styleUrls: ['./add-leave.component.scss'],
    animations: [routerTransition()]
})
export class AddLeaveComponent implements OnInit {
    leave:Leaves=new Leaves(0,'','','','',null,0);
  employees:Employee[];
  registerForm: FormGroup;
  emp:any
  hide = true;
    constructor(private httpClientService:HttpClientService, private formBuilder : FormBuilder,
        private loginService:AuthenticationService) {}

    ngOnInit() {
        this.emp = JSON.stringify(sessionStorage.getItem("username"));


    this.httpClientService.getEmps().subscribe(
      response=>this.handlesuccessfulResponse(response),);

    this.registerForm = this.formBuilder.group({
      'reason': [this.leave.reason, [
        Validators.required
      ]],
      'leaveType': [this.leave.leaveType, [
        Validators.required,
      ]],
      'startDate': [this.leave.startDate, [
        Validators.required
      ]],
      'endDate': [this.leave.endDate, [
        Validators.required
      ]],
    });
  }

  handlesuccessfulResponse(response){
    this.employees=response;

  }
  createLeave(){
    if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
      this.httpClientService.createLeaveEmp(this.leave).subscribe(
        data=>{
          this.httpClientService.leaveMailEmp().subscribe(
            data=>{
              console.log('sended successfully...')
            })

          console.log('Request created successfully...')}
      )
      } else{
    this.httpClientService.createLeave(this.leave).subscribe(
      data=>{console.log('Request created successfully...')
      this.httpClientService.leaveMail(this.leave.empid).subscribe(
        data=>{
          console.log('sended successfully...')
        })
      }
    )
  }
  }
  onRegisterSubmit() {
    alert("Leave request registered");
    window.location.replace("/leaves");
  }
}