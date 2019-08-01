import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService, Employee } from '../service/http-client-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;
  employee

  constructor(private httpClientService:HttpClientService, private loginService:AuthenticationService, public router: Router) { 
    this.router.events.subscribe(val => {
      if (
          val instanceof NavigationEnd &&
          window.innerWidth <= 992 &&
          this.isToggled()
      ) {
          this.toggleSidebar();
      }
  });
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('username'))
    this.httpClientService.getID().subscribe(
      response=>{
        this.employee=response["empid"];
        console.log(this.employee)
      });
     console.log(this.employee)

     this.pushRightClass = 'push-right';
  }

  handlesuccessfulResponse(response){
    this.employee=response["empid"];
}

isToggled(): boolean {
  const dom: Element = document.querySelector('body');
  return dom.classList.contains(this.pushRightClass);
}

toggleSidebar() {
  const dom: any = document.querySelector('body');
  dom.classList.toggle(this.pushRightClass);
}

rltAndLtr() {
  const dom: any = document.querySelector('body');
  dom.classList.toggle('rtl');
}

}
