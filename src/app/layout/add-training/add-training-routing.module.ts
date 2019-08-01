import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrainingComponent } from './add-training.component';

const routes: Routes = [
    {
        path: '', component: AddTrainingComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTrainingRoutingModule { }
