import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMeetingRoomComponent } from './add-meeting-room.component';

const routes: Routes = [
    {
        path: '', component: AddMeetingRoomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddMeetingRoomRoutingModule {
}
