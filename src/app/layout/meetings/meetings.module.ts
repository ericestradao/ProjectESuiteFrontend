import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import {
    AlertComponent,
    ButtonsComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
} from './components';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        MeetingsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        PageHeaderModule
    ],
    declarations: [
        MeetingsComponent,
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent
    ]
})
export class MeetingsModule {}
