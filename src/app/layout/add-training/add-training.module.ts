import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTrainingRoutingModule } from './add-training-routing.module';
import { AddTrainingComponent } from './add-training.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AddTrainingRoutingModule, PageHeaderModule, MaterialModule, ReactiveFormsModule, FormsModule,],
    declarations: [AddTrainingComponent]
})
export class AddTrainingModule {}
