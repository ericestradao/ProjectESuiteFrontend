import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiService } from '../../news-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        HomeRoutingModule,
        StatModule,
        HttpClientModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
    ],
    declarations: [
        HomeComponent,
        
    ],
    providers: [NewsApiService],
    bootstrap: [HomeComponent]
})
export class HomeModule {}
