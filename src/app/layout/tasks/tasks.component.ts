import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService, Tasks } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    animations: [routerTransition()]
})
export class TasksComponent implements OnInit {
    tasks:Tasks[];
    constructor(private httpClientService:HttpClientService, private loginService:AuthenticationService) {}

    ngOnInit() {
        if(sessionStorage.getItem('username')!="eric.estrada.o@outlook.com"){
            this.httpClientService.getTaskEmp().subscribe(
              response=>this.handlesuccessfulResponse(response),);
          } else{
          this.httpClientService.getTasks().subscribe(
            response=>this.handlesuccessfulResponse(response),);
        }
    }

    handlesuccessfulResponse(response){
        this.tasks=response;
      }
    
      deleteTask(tasks:Tasks){
        if(confirm('Are you sure you want to delete this task?')) {
        this.httpClientService.deleteTasks(tasks).subscribe(
          data=>{this.tasks=this.tasks.filter(a=>a !== tasks)});
        
      }else{}
}
}