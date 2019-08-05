import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
            { path: 'addEmp', loadChildren: () => import('./add-employee/add-employee.module').then(m => m.AddEmployeeModule) },
            { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
            { path: 'addTask', loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskModule) },
            { path: 'leaves', loadChildren: () => import('./leaves/leaves.module').then(m => m.LeavesModule) },
            { path: 'addLeave', loadChildren: () => import('./add-leave/add-leave.module').then(m => m.AddLeaveModule) },
            { path: 'meetings', loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule) },
            { path: 'addMeeting', loadChildren: () => import('./add-meeting/add-meeting.module').then(m => m.AddMeetingModule) },
            { path: 'trainings', loadChildren: () => import('./trainings/trainings.module').then(m => m.TrainingsModule) },
            { path: 'addTraining', loadChildren: () => import('./add-training/add-training.module').then(m => m.AddTrainingModule) },
            { path: 'addDepartment', loadChildren: () => import('./add-department/add-department.module').then(m => m.AddDepartmentModule) },
            { path: 'addMeetingRoom', loadChildren: () => import('./add-meeting-room/add-meeting-room.module').then(m => m.AddMeetingRoomModule) },
            { path: 'addTrainingRoom', loadChildren: () => import('./add-training-room/add-training-room.module').then(m => m.AddTrainingRoomModule) },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
