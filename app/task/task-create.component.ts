import {Component} from '@angular/core';
import {Task} from "./task";
import {TaskService} from "./task.service";
import {Router} from "@angular/router";

declare var module: any;
@Component({
    selector: 'task-create',
    templateUrl: 'task-create.component.html',
    moduleId: module.id
})

export class TaskCreateComponent{
    task:Task = {
        id: 0,
        name: ''
    };

    constructor(private taskService: TaskService, private router: Router){}

    submit(){
        this.taskService.createTask(this.task);
        this.router.navigate(['tasks','list']);
    }

}