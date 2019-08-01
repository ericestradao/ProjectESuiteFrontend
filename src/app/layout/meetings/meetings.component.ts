import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee, Meetings, MeetingRoom } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-meetings',
    templateUrl: './meetings.component.html',
    styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
    employees:Employee[];
  meetings:Meetings[];
  meetingRoom:MeetingRoom[];
  
    constructor(private httpClientService:HttpClientService, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getMeetingEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
          this.httpClientService.getMeetings().subscribe(
            response=>this.handlesuccessfulResponse(response),);
          }
    }

    handlesuccessfulResponse(response){
        this.employees=response;
        this.meetings=response;
        this.meetingRoom=response;
    }
  
    deleteMeetings(meeting:Meetings){
      if(confirm('Are you sure you want to delete this meeting request?')) {
        this.httpClientService.deleteMeetings(meeting).subscribe(
          data=>{this.meetings=this.meetings.filter(a=>a !== meeting)}); 
    } else {}
      
    }

    approveMeetings(meeting:Meetings){
        if (confirm('Are you sure you want to approve this meeting request?')) {
          this.httpClientService.approveMeetings(meeting).subscribe(
            data=>{this.meetings=this.meetings.filter(a=>a !== meeting)}); 
            window.location.reload();
      } else {}
    }
    denyMeetings(meeting:Meetings){
      if(confirm('Are you sure you want to deny this meeting request?')) {
        this.httpClientService.denyMeetings(meeting).subscribe(
          data=>{this.meetings=this.meetings.filter(a=>a !== meeting)}); 
          window.location.reload();
    } else {}
}
}
