import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit() {
    if(this.loginService.isUserLoggedIn()){

    }else{
      this.route.navigate(["/login"])
    }
  }

  constructor(private loginService:AuthenticationService, private route:Router,){}
  title = 'ProjectESuite';
}
