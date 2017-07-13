import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task/task-list.component";
import {ModuleWithProviders} from "@angular/core";
import {TaskEditComponent} from "./task/task-edit.component";
import {TaskCreateComponent} from "./task/task-create.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/tasks/list',
        pathMatch: 'full'
    },
    {
        path: 'tasks/create',
        component: TaskCreateComponent
    },
    {
        path: 'tasks/list',
        component: TaskListComponent
    },
    {
        path: 'tasks/edit/:id',
        component: TaskEditComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);