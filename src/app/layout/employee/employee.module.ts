import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiService } from '../../news-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './employee.component';
import { PageHeaderModule } from '../../shared';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        EmployeeRoutingModule,
        StatModule,
        HttpClientModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        PageHeaderModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EmployeeComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [NewsApiService],
    bootstrap: [EmployeeComponent]
})
export class EmployeeModule {}
