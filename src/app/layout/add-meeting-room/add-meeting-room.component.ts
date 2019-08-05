import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';
import { Department, HttpClientService, MeetingRoom } from 'src/app/service/http-client-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-meeting-room',
  templateUrl: './add-meeting-room.component.html',
  styleUrls: ['./add-meeting-room.component.css'],
  animations: [routerTransition()]
})
export class AddMeetingRoomComponent implements OnInit {

  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  room:MeetingRoom=new MeetingRoom(0,'',0,0);
  meetingRoom:MeetingRoom[];
  registerForm: FormGroup;
    hide = true;
    closeResult: string;

    roomId:number
    meetingRoomName:string
    capacity:number
    floor:number

  constructor(private httpClientService:HttpClientService, 
    private modalService: NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.httpClientService.getMeetingRoom().subscribe(
        response=>this.handlesuccessfulResponse(response),);
    
        this.registerForm = this.formBuilder.group({
          'meetingRoomName': [this.room.meetingRoomName, [
            Validators.required
          ]],
          'capacity': [this.room.capacity, [
            Validators.minLength(1)
          ]],
          'floor': [this.room.floor, [
            Validators.minLength(1)
          ]],
        });
      }

      getMRoom(meetingRoom:MeetingRoom){
        this.httpClientService.getMRoom(meetingRoom).subscribe(
            data=>{this.meetingRoom=this.meetingRoom.filter(a=>a !== meetingRoom)
                this.roomId=data.roomId
                this.meetingRoomName=data.meetingRoomName
                this.capacity=data.capacity
                this.floor=data.floor
              //  console.log(this.email)
          //  ,response=>this.handlesuccessfulResponse(response)
            });
    }
    
    updateMRoom(){
        this.room.roomId=this.roomId
        this.room.meetingRoomName=this.meetingRoomName
        this.room.capacity=this.capacity
        this.room.floor=this.floor
        
        this.httpClientService.updateMRoom(this.room).subscribe(
          data=>{
            console.log('updated successfully...'+this.room+' >'+data)
          }
                        
        )
        
      }
  
    handlesuccessfulResponse(response){
      // this.employees=response;
       this.meetingRoom=response;
    }

    createRoom(){
      this.httpClientService.createMeetingRoom(this.room).subscribe(
        data=>{console.log('Room created successfully...')}
      )

   //   this.httpClientService.sendMail()
    }
  
    deleteMRoom(meetingRoom:MeetingRoom){
      if(confirm('Are you sure you want to delete this room?')) {
    this.httpClientService.deleteMRoom(meetingRoom).subscribe(
      data=>{this.meetingRoom=this.meetingRoom.filter(a=>a !== meetingRoom)
      });
  }else{}
    
  }
    onRegisterSubmit() {
      alert("Room created");
      window.location.reload();
    }

    public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }
  
  open(content) {
    
      this.modalService.open(content, {ariaLabelledBy: 'edit-room-title'}).result.then((result) => {
        if(confirm('Are you sure you want to edit this room?')) {
        this.updateMRoom()
        this.closeResult = `Closed with: ${result}`;
        alert("Room edited");
        window.location.replace("/addMeetingRoom");
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
