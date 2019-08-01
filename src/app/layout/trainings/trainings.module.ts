import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, TrainingsRoutingModule, PageHeaderModule],
    declarations: [TrainingsComponent]
})
export class TrainingsModule {}
