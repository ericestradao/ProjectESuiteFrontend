import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AddMeetingRoomComponent } from './add-meeting-room/add-meeting-room.component';
import { AddTrainingRoomComponent } from './add-training-room/add-training-room.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    bootstrap: [HeaderComponent,LayoutComponent,SidebarComponent]
})
export class LayoutModule {}
