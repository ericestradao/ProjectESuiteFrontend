import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationValidator } from 'src/app/shared/register.validator';

@NgModule({
    imports: [CommonModule, AddEmployeeRoutingModule, PageHeaderModule, MaterialModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [AddEmployeeComponent ]
})
export class AddEmployeeModule {}
