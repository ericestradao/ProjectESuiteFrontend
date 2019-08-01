import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './add-department-routing.module';
import { AddDepartmentComponent } from './add-department.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,MaterialModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [AddDepartmentComponent]
})
export class AddDepartmentModule {}
