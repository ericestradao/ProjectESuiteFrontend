import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './add-department-routing.module';
import { AddDepartmentComponent } from './add-department.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,MaterialModule, NgbModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [AddDepartmentComponent]
})
export class AddDepartmentModule {}
