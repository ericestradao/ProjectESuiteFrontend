import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskRoutingModule } from './add-task-routing.module';
import { AddTaskComponent } from './add-task.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AddTaskRoutingModule, PageHeaderModule, MaterialModule, FormsModule,
        ReactiveFormsModule],
    declarations: [AddTaskComponent]
})
export class AddTaskModule {}
