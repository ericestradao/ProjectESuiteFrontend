import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Meetings, Employee, MeetingRoom, HttpClientService } from 'src/app/service/http-client-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-add-meeting',
    templateUrl: './add-meeting.component.html',
    styleUrls: ['./add-meeting.component.scss'],
    animations: [routerTransition()]
})
export class AddMeetingComponent implements OnInit {

    meeting:Meetings=new Meetings(0,'','','',0,0);
  meetingRoom:MeetingRoom[];
  employees:Employee[];
  registerForm: FormGroup;
  hide = true;
  
    constructor(private httpClientService:HttpClientService, private formBuilder : FormBuilder,
        private loginService:AuthenticationService) {}

    ngOnInit() {this.httpClientService.getEmps().subscribe(
        response=>this.handlesuccessfulResponseEmps(response),);
  
      this.httpClientService.getMeetingRoom().subscribe(
        response=>this.handlesuccessfulResponseRoom(response),);
  
        this.registerForm = this.formBuilder.group({
          'meetingDesc': [this.meeting.meetingDesc, [
            Validators.required
          ]],
          'startTime': [this.meeting.startTime, [
            Validators.required
          ]],
          'endTime': [this.meeting.endTime, [
            Validators.required
          ]],
          'roomId': ['', [
            Validators.required
          ]],
        });
    }
  
    handlesuccessfulResponseEmps(response){
      this.employees=response;
  
    }
  
    handlesuccessfulResponseRoom(response){
      this.meetingRoom=response;
  
    }
    createMeeting(){
      if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
        this.httpClientService.createMeetingEmp(this.meeting).subscribe(
          data=>{console.log('Meeting created successfully...')
          this.httpClientService.meetingMailEmp().subscribe(
            data=>{
              console.log('sended successfully...')
            })
        }
        )
        } else{
      this.httpClientService.createMeeting(this.meeting).subscribe(
        data=>{console.log('Meeting created successfully...')
        this.httpClientService.meetingMail(this.meeting.empid).subscribe(
          data=>{
            console.log('sended successfully...')
          })
      }
      )
    }}
  
    onRegisterSubmit() {
      alert("Meeting registered");
      
    window.location.replace("/meetings");
    }
}
