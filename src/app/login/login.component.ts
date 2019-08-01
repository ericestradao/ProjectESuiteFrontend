import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../service/http-client-service.service';
import { routerTransition } from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  username:string=''
  password:string=''
  invalidLogin=false;

  constructor(private httpClientService:HttpClientService, private route:Router, private loginservice:AuthenticationService, private alerts: AlertsService) { }

  ngOnInit() {
  }

  checkLogin(){
    this.loginservice.authenticate(this.username, this.password).subscribe(
      data=>{          
        if (data) {
        console.log(data.token);
        if (data.token) {  
        sessionStorage.setItem("username", this.username)
        sessionStorage.setItem("token", data.token)

        this.httpClientService.getID().subscribe(
          response=>{
            sessionStorage.setItem("id", response.empid.toString())
            sessionStorage.setItem("firstname", response.f_name.toString())
            sessionStorage.setItem("lastname", response.l_name.toString())
            console.log(sessionStorage.getItem('firstname'))
            console.log(parseInt(sessionStorage.getItem('id')))
          });

        this.route.navigate(["/home"])
        }else{
          console.log("no token");
        }
      }
      },(error) =>{
        this.invalidLogin=true;
    }
    )
    }
}
