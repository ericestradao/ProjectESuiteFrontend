import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee, Meetings, MeetingRoom } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-meetings',
    templateUrl: './meetings.component.html',
    styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    employees:Employee[];
  meetings:Meetings[];
  meeting:Meetings=new Meetings(0,'','','',0,0);
  meetingRoom:MeetingRoom[];
  closeResult: string;
  startTime:string;
  endTime:string;
  meetingDesc:string;
  resquestId:number;
  
    constructor(private httpClientService:HttpClientService,
      private modalService: NgbModal, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getMeetingEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
          this.httpClientService.getMeetings().subscribe(
            response=>this.handlesuccessfulResponse(response),);
          }
    }

    getMeeting(meeting:Meetings){
      this.httpClientService.getMeeting(meeting).subscribe(
          data=>{this.meetings=this.meetings.filter(a=>a !== meeting)
              this.startTime=data.startTime
              this.endTime=data.endTime
              this.meetingDesc=data.meetingDesc
              this.resquestId=data.requestId
            //  console.log(this.email)
        //  ,response=>this.handlesuccessfulResponse(response)
          });
  }

  updateMeeting(){
      this.meeting.startTime=this.startTime
      this.meeting.endTime=this.endTime
      this.meeting.meetingDesc=this.meetingDesc
      this.meeting.requestId=this.resquestId
      
      this.httpClientService.updateMeeting(this.meeting).subscribe(
        data=>{
          console.log('updated successfully...'+this.meeting+' >'+data)
        }
                      
      )
      
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

public closeAlert(alert: any) {
  const index: number = this.alerts.indexOf(alert);
  this.alerts.splice(index, 1);
}

open(content) {

  this.modalService.open(content, {ariaLabelledBy: 'edit-meeting-title'}).result.then((result) => {
    if(confirm('Are you sure you want to edit this meeting?')) {
    this.updateMeeting()
    this.closeResult = `Closed with: ${result}`;
    alert("Meeting edited");
    window.location.replace("/meetings");
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
