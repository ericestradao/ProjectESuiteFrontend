import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMeetingRoomRoutingModule } from './add-meeting-room-routing.module';
import { AddMeetingRoomComponent } from './add-meeting-room.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, AddMeetingRoomRoutingModule, PageHeaderModule,MaterialModule,NgbModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [AddMeetingRoomComponent]
})
export class AddMeetingRoomModule {}
