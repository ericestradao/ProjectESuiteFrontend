import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLeaveComponent } from './add-leave.component';

const routes: Routes = [
    {
        path: '', component: AddLeaveComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLeaveRoutingModule { }
