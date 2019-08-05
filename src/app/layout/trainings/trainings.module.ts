import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, TrainingsRoutingModule, PageHeaderModule, NgbModule, FormsModule,
        ReactiveFormsModule],
    declarations: [TrainingsComponent]
})
export class TrainingsModule {}
