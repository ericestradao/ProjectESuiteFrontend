import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLeaveRoutingModule } from './add-leave-routing.module';
import { AddLeaveComponent } from './add-leave.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AddLeaveRoutingModule, PageHeaderModule,MaterialModule, FormsModule,
        ReactiveFormsModule],
    declarations: [AddLeaveComponent]
})
export class AddLeaveModule {}
