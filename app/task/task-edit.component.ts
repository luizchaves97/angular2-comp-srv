import {Component, Input} from '@angular/core';
import {Task} from "./task";

declare var module: any;
@Component({
    selector: 'task-edit',
    templateUrl: 'task-edit.component.html',
    moduleId: module.id
})

export class TaskEditComponent{
    @Input()
    task:Task;
}