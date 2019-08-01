import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Department, HttpClientService } from 'src/app/service/http-client-service.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { NewsApiService } from '../../news-api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit {

    mArticles:Array<string>;
    mSources:Array<string>;

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    

    constructor(private httpClientService:HttpClientService, 
        private newsapi:NewsApiService, private loginService:AuthenticationService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Welcome to ESuite '+sessionStorage.getItem('firstname'),
                text:
                    'Think Different.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Welcome to ESuite '+sessionStorage.getItem('firstname'),
                text: 'Somewhere, something incredible is waiting to be known.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Welcome to ESuite '+sessionStorage.getItem('firstname'),
                text:
                    'Building Minds. Building Futures.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
                 //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      //load news sources
      this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

    searchArticles(source){
        console.log("selected source is: "+source);
        this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
      }


    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
