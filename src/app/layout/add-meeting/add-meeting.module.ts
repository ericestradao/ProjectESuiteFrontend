import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMeetingRoutingModule } from './add-meeting-routing.module';
import { AddMeetingComponent } from './add-meeting.component';
import { MaterialModule } from 'src/app/material.module';
import { PageHeaderModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AddMeetingRoutingModule, MaterialModule, PageHeaderModule, FormsModule,
        ReactiveFormsModule,],
    declarations: [AddMeetingComponent]
})
export class AddMeetingModule {}
