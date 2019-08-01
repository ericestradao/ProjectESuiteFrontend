import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, TasksRoutingModule, PageHeaderModule],
    declarations: [TasksComponent]
})
export class TasksModule {}
