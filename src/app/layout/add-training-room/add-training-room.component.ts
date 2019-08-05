import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Department, HttpClientService, TrainingRoom } from 'src/app/service/http-client-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-training-room',
  templateUrl: './add-training-room.component.html',
  styleUrls: ['./add-training-room.component.css'],
  animations: [routerTransition()]
})
export class AddTrainingRoomComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  room:TrainingRoom=new TrainingRoom(0,'',0,0,null,null);
  trainingRoom:TrainingRoom[];
  registerForm: FormGroup;
    hide = true;
    closeResult: string;

  roomId:number
  roomName:string
  roomCapacity:number
  floorNb:number

  constructor(private httpClientService:HttpClientService,
    private modalService: NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.httpClientService.getTrainingRoom().subscribe(
        response=>this.handlesuccessfulResponse(response),);
    
        this.registerForm = this.formBuilder.group({
          'roomName': [this.room.roomName, [
            Validators.required
          ]],
          'roomCapacity': [this.room.roomCapacity, [
            Validators.minLength(1)
          ]],
          'floorNb': [this.room.floorNb, [
            Validators.minLength(1)
          ]],
          'isProjector': [this.room.isProjector, [
            Validators.required
          ]],
          'isWhiteboard': [this.room.isWhiteboard, [
            Validators.required
          ]],
        });
      }

      getTRoom(trainingRoom:TrainingRoom){
        this.httpClientService.getTRoom(trainingRoom).subscribe(
            data=>{this.trainingRoom=this.trainingRoom.filter(a=>a !== trainingRoom)
                this.roomId=data.roomId
                this.roomName=data.roomName
                this.roomCapacity=data.roomCapacity
                this.floorNb=data.floorNb
              //  console.log(this.email)
          //  ,response=>this.handlesuccessfulResponse(response)
            });
    }
    
    updateTRoom(){
        this.room.roomId=this.roomId
        this.room.roomName=this.roomName
        this.room.roomCapacity=this.roomCapacity
        this.room.floorNb=this.floorNb
        
        this.httpClientService.updateTRoom(this.room).subscribe(
          data=>{
            console.log('updated successfully...'+this.room+' >'+data)
          }
                        
        )
        
      }
  
    handlesuccessfulResponse(response){
      // this.employees=response;
       this.trainingRoom=response;
    }

    createRoom(){
      this.httpClientService.createTrainingRoom(this.room).subscribe(
        data=>{console.log('Room created successfully...')}
      )

   //   this.httpClientService.sendMail()
    }

    deleteTRoom(trainingRoom:TrainingRoom){
      if(confirm('Are you sure you want to delete this room?')) {
    this.httpClientService.deleteTRoom(trainingRoom).subscribe(
      data=>{this.trainingRoom=this.trainingRoom.filter(a=>a !== trainingRoom)
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
        this.updateTRoom()
        this.closeResult = `Closed with: ${result}`;
        alert("Room edited");
        window.location.replace("/addTrainingRoom");
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
